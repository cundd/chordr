use async_trait::async_trait;
use wasm_bindgen::__rt::core::marker::PhantomData;

use libchordr::prelude::Catalog;

use crate::constants::{STORAGE_KEY_CATALOG, STORAGE_NAMESPACE};
use crate::errors::PersistenceError;
use crate::persistence::backend::BrowserStorageBackend;
use crate::persistence::persistence_manager::PersistenceManagerTrait;
use crate::persistence::prelude::{BackendTrait, BrowserStorage};
use crate::{fetch, WebError};

use super::WebRepositoryTrait;

pub struct CatalogWebRepository<'a, P: PersistenceManagerTrait> {
    _phantom: ::std::marker::PhantomData<&'a P>,
    backend: BrowserStorageBackend<BrowserStorage>,
}

impl<'a, P> CatalogWebRepository<'a, P>
where
    P: PersistenceManagerTrait,
{
    pub fn new(_persistence_manager: &'a P, browser_storage: BrowserStorage) -> Self {
        Self {
            backend: BrowserStorageBackend::new(browser_storage),
            _phantom: PhantomData,
        }
    }

    async fn fetch_catalog(&self, append_timestamp: bool) -> Result<Option<Catalog>, WebError> {
        let base_uri = "/catalog.json";
        let uri = if append_timestamp {
            format!("{}?{}", base_uri, chrono::Local::now().timestamp())
        } else {
            format!("{}", base_uri)
        };

        let catalog = fetch::<Catalog>(&uri).await?;
        Ok(Some(catalog))
    }
}

#[async_trait(? Send)]
impl<'a, P> WebRepositoryTrait for CatalogWebRepository<'a, P>
where
    P: PersistenceManagerTrait,
{
    type ManagedType = Catalog;

    fn namespace() -> &'static str {
        ""
    }

    fn key() -> &'static str {
        ""
    }

    async fn store(&mut self, _value: &Self::ManagedType) -> Result<(), WebError> {
        Err(PersistenceError::general_error("Changing the Catalog is not implement").into())
    }

    async fn load(&mut self) -> Result<Option<Self::ManagedType>, WebError> {
        match self.fetch_catalog(true).await {
            Ok(Some(c)) => {
                // Store/cache the loaded Catalog
                let _ = self
                    .backend
                    .store(STORAGE_NAMESPACE, STORAGE_KEY_CATALOG, &c)
                    .await;

                return Ok(Some(c));
            }
            Ok(None) => {}
            Err(_) => {}
        }

        self.backend
            .load(STORAGE_NAMESPACE, STORAGE_KEY_CATALOG)
            .await
    }
}
