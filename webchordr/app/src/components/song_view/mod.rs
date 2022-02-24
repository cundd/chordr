use log::info;
use log::{debug, error};
use web_sys::window;
use web_sys::Document;
use yew::prelude::*;
use yew::virtual_dom::VNode;
use yew::{Component, ComponentLink};

use libchordr::models::song_settings::SongSettings;
use libchordr::prelude::*;

use crate::components::song_view::semitone_notation_tool::SemitoneNotationTool;
use crate::state::SongInfo;

use self::home_tool::HomeTool;
use self::setlist_tool::Setlist;
pub use self::song_notes::SongNotes;
use self::transpose_tool::TransposeTool;

mod home_tool;
mod semitone_notation_tool;
mod setlist_tool;
mod song_notes;
mod transpose_tool;

#[derive(Properties, Clone, Debug)]
pub struct SongViewProps {
    pub song_info: SongInfo,
    pub enable_setlists: bool,

    pub on_setlist_add: Callback<SetlistEntry>,
    pub on_setlist_remove: Callback<SongId>,
    pub on_settings_change: Callback<(SongId, SongSettings)>,

    /// Display the Transpose tool with an input field
    #[prop_or_default]
    pub show_input_field: Option<()>,
}

impl PartialEq for SongViewProps {
    fn eq(&self, other: &Self) -> bool {
        self.song_info == other.song_info
            && self.enable_setlists == other.enable_setlists
            && self.show_input_field == other.show_input_field
    }
}

pub enum Msg {
    TransposeUp,
    TransposeDown,
    TransposeSet(isize),
    SetlistChange(bool),
    SemitoneNotationChange(SemitoneNotation),
}

#[allow(dead_code)]
pub struct SongView {
    /// State from the parent
    props: SongViewProps,
    /// Utility object
    link: ComponentLink<Self>,
}

impl Component for SongView {
    type Message = Msg;
    type Properties = SongViewProps;

    fn create(props: Self::Properties, link: ComponentLink<Self>) -> Self {
        Self { link, props }
    }

    fn update(&mut self, msg: Self::Message) -> ShouldRender {
        let song_settings = self.props.song_info.song_settings.clone();

        match msg {
            Msg::TransposeUp => self.change_transpose(song_settings.transpose_semitone() + 1),
            Msg::TransposeDown => self.change_transpose(song_settings.transpose_semitone() - 1),
            Msg::TransposeSet(v) => self.change_transpose(v),
            Msg::SemitoneNotationChange(s) => self.change_semitone_notation(s),
            Msg::SetlistChange(flag) => {
                let song = &self.props.song_info.song;
                info!("Set Song {} on setlist: {:?}", song.id(), flag);
                if flag {
                    self.props
                        .on_setlist_add
                        .emit(SetlistEntry::from_song_with_settings(song, song_settings))
                } else {
                    self.props.on_setlist_remove.emit(song.id())
                }
            }
        };

        false
    }

    fn change(&mut self, props: Self::Properties) -> ShouldRender {
        if self.props != props {
            self.props = props;
            true
        } else {
            false
        }
    }

    fn view(&self) -> Html {
        info!(
            "View song {} (transpose {}, in setlist: {})",
            self.props.song_info.song.id(),
            self.props.song_info.song_settings.transpose_semitone(),
            self.props.song_info.is_on_setlist
        );

        let semitone_notation = self.props.song_info.song_settings.semitone_notation();
        let transpose_semitone = self.props.song_info.song_settings.transpose_semitone();

        let detail = self.convert_song_to_html_node();
        let transpose_up = self.link.callback(|_| Msg::TransposeUp);
        let transpose_down = self.link.callback(|_| Msg::TransposeDown);
        let transpose_set = self.link.callback(Msg::TransposeSet);
        let setlist_change = self.link.callback(Msg::SetlistChange);
        let semitone_notation_set = self.link.callback(Msg::SemitoneNotationChange);

        let setlist_tool = if self.props.enable_setlists {
            html! {
                <Setlist
                    on_click=setlist_change
                    is_on_setlist=self.props.song_info.is_on_setlist
                />
            }
        } else {
            html! {}
        };
        html! {
            <div>
                {detail}
                <div class="song-tools">
                    <HomeTool/>
                    <TransposeTool
                        show_input_field=false
                        transpose_semitone=transpose_semitone
                        on_click_up=transpose_up
                        on_click_down=transpose_down
                        on_set=transpose_set
                    />
                    {setlist_tool}
                    <SemitoneNotationTool
                        semitone_notation=semitone_notation
                        on_change=semitone_notation_set
                    />
                </div>
            </div>
        }
    }
}

impl SongView {
    fn send_change(&self, song_settings: SongSettings) {
        self.props
            .on_settings_change
            .emit((self.props.song_info.song.id(), song_settings))
    }

    fn convert_song_to_html_string(&self) -> String {
        use chrono::Utc;

        let props = &self.props;
        let transpose_semitone = props.song_info.song_settings.transpose_semitone();
        let formatting = props.song_info.song_settings.formatting();

        let start = Utc::now().time();
        let converter_result = if transpose_semitone != 0 {
            transpose_and_convert_to_format(
                props.song_info.song.src().as_bytes(),
                transpose_semitone,
                props.song_info.song.meta(),
                formatting,
            )
        } else {
            convert_to_format(
                props.song_info.song.src().as_bytes(),
                props.song_info.song.meta(),
                formatting,
            )
        };
        let end = Utc::now().time();
        debug!(
            "Converted the song in {:?}ms",
            (end - start).num_milliseconds()
        );

        match converter_result {
            Ok(s) => s,
            Err(e) => {
                error!("{}", e);
                String::new()
            }
        }
    }

    fn convert_song_to_html_node(&self) -> VNode {
        let html = self.convert_song_to_html_string();

        // Use `web_sys`'s global `window` function to get a handle on the global
        let window = window().expect("Could not detect the JS window object");
        let document: Document = window
            .document()
            .expect("Could not get document from JS window");

        // Manufacture the element we're gonna append
        match document.create_element("div") {
            Ok(e) => {
                e.set_inner_html(&html);
                VNode::VRef((&e as &web_sys::Node).clone())
            }
            Err(_) => html! {},
        }
    }

    fn change_transpose(&mut self, transpose_semitone: isize) {
        info!("Change transpose semitone to {}", transpose_semitone);
        self.send_change(
            self.props
                .song_info
                .song_settings
                .with_transpose_semitone(transpose_semitone),
        );
    }

    fn change_semitone_notation(&mut self, s: SemitoneNotation) {
        let formatting = Formatting {
            semitone_notation: s,
            ..self.props.song_info.song_settings.formatting()
        };

        info!("Change formatting to {:?}", formatting);
        self.send_change(
            self.props
                .song_info
                .song_settings
                .with_formatting(formatting),
        );
    }
}
