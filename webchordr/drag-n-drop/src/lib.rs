use self::handle::DropzoneHandle;
use self::wasm::DropzoneWrapper;
use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
use web_sys::HtmlElement;
use webchordr_common::helpers::Class;
use yew::prelude::*;

mod handle;
mod wasm;

#[derive(Serialize, Deserialize)]
pub struct OnDropArgument {
    pub dataset: HashMap<String, String>,
}

type OnDropJsCallback = dyn Fn(&JsValue);
type OnDropClosure = Closure<OnDropJsCallback>;
type OnDropPropCallback = Callback<OnDropArgument>;
#[derive(Properties, PartialEq, Clone)]
pub struct DropzoneProps {
    pub children: Children,

    pub item_selector: String,

    #[prop_or_default]
    pub class: Class,

    #[prop_or_default]
    pub on_drop: OnDropPropCallback,
}

pub struct Dropzone {
    props: DropzoneProps,
    drag_n_drop_handle: Option<DropzoneHandle>,
    node_ref: NodeRef,
}

impl Component for Dropzone {
    type Message = ();
    type Properties = DropzoneProps;

    fn create(props: Self::Properties, _link: ComponentLink<Self>) -> Self {
        Self {
            props,
            node_ref: NodeRef::default(),
            drag_n_drop_handle: None,
        }
    }

    fn update(&mut self, _msg: Self::Message) -> ShouldRender {
        true
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
        return html! {<div class=&self.props.class ref=self.node_ref.clone()>{{ self.props.children.iter().collect::<Html>() }}</div>};
    }

    fn rendered(&mut self, _first_render: bool) {
        if self.drag_n_drop_handle.is_none() {
            let _ =
                self.make_dropzone(self.props.item_selector.clone(), self.props.on_drop.clone());
        }
    }

    fn destroy(&mut self) {
        if let Some(mut handle) = self.drag_n_drop_handle.take() {
            handle.destroy()
        };
    }
}

impl Dropzone {
    pub fn make_dropzone(
        &mut self,
        item_selector: String,
        callback: OnDropPropCallback,
    ) -> Result<(), ()> {
        if let Some(element) = self.node_ref.cast::<HtmlElement>() {
            let handler = Box::new(move |val: &JsValue| {
                if let Ok(argument) = val.into_serde::<OnDropArgument>() {
                    callback.emit(argument);
                }
            });

            let closure = Closure::wrap(handler as Box<dyn Fn(&JsValue)>);
            let wrapper =
                DropzoneWrapper::new(&element, item_selector, closure.as_ref().unchecked_ref());

            self.drag_n_drop_handle = Some(DropzoneHandle {
                wrapper,
                _closure: closure,
            });

            Ok(())
        } else {
            Err(())
        }
    }
}
