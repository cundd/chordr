#![recursion_limit = "128000"]
extern crate stdweb;

mod components;
mod helpers;
mod route;

use crate::components::nav::Nav;
use crate::components::reload_section::ReloadSection;
use crate::components::song_browser::SongBrowser;
use crate::components::song_view::SongView;
use crate::components::start_screen::StartScreen;
use crate::route::AppRoute;
use failure::Error;
use libchordr::models::setlist::{Setlist, SetlistEntry};
use libchordr::models::song_id::SongIdTrait;
use libchordr::models::song_settings::SongSettings;
use libchordr::prelude::*;
use log::{debug, error, info, warn};
use percent_encoding::percent_decode_str;
use std::rc::Rc;
use stdweb::js;
use yew::format::{Json, Nothing};
use yew::services::fetch::{FetchService, FetchTask, Request, Response};
use yew::services::storage::{Area, StorageService};
use yew::{html, Component, ComponentLink, Html, ShouldRender};
use yew_router::prelude::*;

const STORAGE_KEY_SETLIST: &'static str = "net.cundd.chordr.setlist";
const STORAGE_KEY_SETTINGS: &'static str = "net.cundd.chordr.settings";

pub enum Format {
    Json,
    Chorddown,
}

#[allow(dead_code)]
pub struct App {
    fetch_service: FetchService,
    storage_service: StorageService,
    route_service: RouteService<()>,
    route: Route<()>,
    link: ComponentLink<App>,
    ft: Option<FetchTask>,

    show_menu: bool,
    fetching: bool,
    catalog: Option<Catalog>,
    current_song: Option<Song>,
    setlist: Setlist<SetlistEntry>,
    settings: SongSettingsMap,
}

pub enum Msg {
    OpenSongInMainView(SongId),
    FetchCatalogReady(Result<Catalog, Error>),
    FetchCatalog(bool),
    SetlistAdd(SetlistEntry),
    SetlistRemove(SongId),
    SongSettingsChange(SongId, SongSettings),
    ToggleMenu,
    Reload,
    Ignore,
    RouteChanged(Route<()>),
}

impl App {
    fn route(&self) -> Html {
        (match AppRoute::switch(self.route.clone()) {
            Some(AppRoute::Song(id)) => self.view_song(id),
            Some(AppRoute::SongBrowser(chars)) => self.view_song_browser(chars),
            Some(AppRoute::Index) => {
                html! {<><StartScreen/>{self.view_song_browser("")}<ReloadSection /></>}
            }
            None => html! {<><StartScreen/>{self.view_song_browser("")}<ReloadSection /></>},
        }) as Html
    }

    fn view_song(&self, song_id: SongId) -> Html {
        if self.catalog.is_none() {
            return html! {};
        }

        let catalog = self.catalog.as_ref().unwrap();
        if let Some(song) = catalog.get(song_id.clone()) {
            let add = self.link.callback(|s| Msg::SetlistAdd(s));
            let remove = self.link.callback(|s| Msg::SetlistRemove(s));
            let change = self
                .link
                .callback(|s: (SongId, SongSettings)| Msg::SongSettingsChange(s.0, s.1));
            let is_on_setlist = self.setlist.contains(song);

            let song_settings = match self.settings.get(&song_id) {
                Some(s) => {
                    info!("Found settings for song {}: {:?}", song_id, s);
                    s.clone()
                }
                None => {
                    info!("No settings for song {} found in setlist", song_id);
                    SongSettings::new(0, Formatting::default())
                }
            };

            info!("Song {} is on list? {}", song.id(), is_on_setlist);

            return html! {
                <SongView
                    song=song
                    song_settings=song_settings
                    enable_setlists=true
                    on_setlist_add=add
                    on_setlist_remove=remove
                    on_settings_change=change
                    is_on_setlist=is_on_setlist
                />
            };
        }

        match percent_decode_str(&song_id).decode_utf8() {
            Ok(decoded) => {
                let decoded = decoded.to_string();
                info!("Decoded song ID '{}' to '{}'", song_id, decoded);
                if decoded != song_id {
                    self.view_song(decoded)
                } else {
                    html! {}
                }
            }
            Err(e) => {
                error!("Could not decode the song ID {}", e);
                (html! {}) as Html
            }
        }
    }

    fn view_song_browser<S: Into<String>>(&self, chars: S) -> Html {
        let chars_as_string = chars.into();
        let chars = match percent_decode_str(&chars_as_string).decode_utf8() {
            Ok(decoded) => decoded.to_string(),
            Err(_) => chars_as_string,
        };

        (match &self.catalog {
            Some(catalog) => {
                info!("New chars from router: {}", chars);
                html! {<SongBrowser chars=chars catalog=catalog/>}
            }
            None => html! {},
        }) as Html
    }

    fn fetch_catalog(&mut self, no_cache: bool) {
        use stdweb::web::Date;

        let callback =
            self.link
                .callback(move |response: Response<Json<Result<Catalog, Error>>>| {
                    let (meta, Json(data)) = response.into_parts();
                    if meta.status.is_success() {
                        Msg::FetchCatalogReady(data)
                    } else if no_cache {
                        info!("Could not fetch catalog without cache. Try again");
                        Msg::FetchCatalog(false)
                    } else {
                        error!("Could not fetch catalog: {:?}", meta);
                        Msg::Ignore
                    }
                });

        let uri_base = "/catalog.json".to_owned();
        let uri = if no_cache {
            uri_base + &format!("?{}", Date::now())
        } else {
            uri_base
        };
        let request = Request::get(uri)
            .body(Nothing)
            .expect("Request could not be built");
        self.ft = Some(self.fetch_service.fetch(request, callback));
    }

    fn setlist_add(&mut self, song: SetlistEntry) {
        let song_id = song.id();
        match self.setlist.add(song) {
            Ok(_) => debug!("Did add song to setlist {}", song_id),
            Err(e) => error!("Could not add song to setlist: {:?}", e),
        }
        self.storage_service
            .store(STORAGE_KEY_SETLIST, Json(&self.setlist));
    }

    fn setlist_remove(&mut self, song_id: SongId) {
        match self.setlist.remove_by_id(&song_id) {
            Ok(_) => info!("Removed song {} from setlist", song_id),
            Err(_) => warn!("Could not remove song {} from setlist", song_id),
        }
        self.storage_service
            .store(STORAGE_KEY_SETLIST, Json(&self.setlist));
    }

    fn song_settings_change(&mut self, song_id: SongId, settings: SongSettings) {
        self.settings.store(song_id, settings);
        self.storage_service
            .store(STORAGE_KEY_SETTINGS, Json(&self.settings));
    }

    fn get_setlist(storage_service: &StorageService) -> Setlist<SetlistEntry> {
        if let Json(Ok(restored_model)) = storage_service.restore(STORAGE_KEY_SETLIST) {
            restored_model
        } else {
            Setlist::new()
        }
    }
    fn get_settings(storage_service: &StorageService) -> SongSettingsMap {
        if let Json(Ok(restored_model)) = storage_service.restore(STORAGE_KEY_SETTINGS) {
            restored_model
        } else {
            SongSettingsMap::new()
        }
    }
}

impl Component for App {
    type Message = Msg;
    type Properties = ();

    fn create(_: Self::Properties, link: ComponentLink<Self>) -> Self {
        let mut route_service: RouteService<()> = RouteService::new();
        let route = route_service.get_route();
        let route = Route::from(route);
        let callback = link.callback(Msg::RouteChanged);
        route_service.register_callback(callback);

        let storage_service = StorageService::new(Area::Local);
        let setlist = App::get_setlist(&storage_service);
        let settings = App::get_settings(&storage_service);

        Self {
            fetch_service: FetchService::new(),
            storage_service,
            link,
            fetching: false,
            show_menu: true,
            current_song: None,
            catalog: None,
            ft: None,
            settings,
            setlist,
            route_service,
            route,
        }
    }

    fn mounted(&mut self) -> ShouldRender {
        self.fetch_catalog(true);

        false
    }

    fn update(&mut self, msg: Self::Message) -> ShouldRender {
        match msg {
            Msg::RouteChanged(route) => self.route = route,
            Msg::OpenSongInMainView(song_id) => {
                info!("Change song to {}", song_id);
                self.current_song = match &self.catalog {
                    Some(c) => c.get(song_id).cloned(),
                    None => {
                        error!("Catalog not loaded yet");
                        None
                    }
                }
            }
            Msg::FetchCatalogReady(response) => {
                self.fetching = false;
                self.catalog = response.ok();
            }
            Msg::FetchCatalog(no_cache) => self.fetch_catalog(no_cache),
            Msg::SetlistAdd(song) => self.setlist_add(song),
            Msg::SetlistRemove(song) => self.setlist_remove(song),
            Msg::SongSettingsChange(song_id, settings) => {
                self.song_settings_change(song_id, settings)
            }
            Msg::Ignore => return false,
            Msg::ToggleMenu => {
                self.show_menu = !self.show_menu;
            }
            Msg::Reload => {
                js! {
                    top.frames.location.reload()
                }
            }
        }
        true
    }

    fn view(&self) -> Html {
        let main_classes = if self.show_menu {
            "-menu-visible"
        } else {
            "-menu-hidden"
        };

        let toggle_menu = self.link.callback(|_| Msg::ToggleMenu);
        let songs = Rc::new(self.setlist.clone());

        html! {
            <main class=main_classes>
                <Nav
                    show_menu=self.show_menu
                    songs=songs
                    on_toggle=toggle_menu
                />
                <div class="content">
                    { self.route() }
                </div>
            </main>
        }
    }
}
