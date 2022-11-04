#[allow(deprecated)]
pub use self::backend_trait::BackendTrait;
#[allow(deprecated)]
pub use self::backend_trait::CommandBackendTrait;
pub use self::backend_trait::CommandQueryBackendTrait;
#[allow(deprecated)]
pub use self::backend_trait::QueryBackendTrait;
pub use self::browser_storage_backend::BrowserStorageBackend;
pub use self::browser_storage_backend_factory::BrowserStorageBackendFactory;
pub use self::server_backend::ServerBackend;
pub use self::server_backend_factory::ServerBackendFactory;
pub use self::transient_backend::TransientBackend;
pub use self::transient_backend_factory::TransientBackendFactory;

mod backend_trait;
mod browser_storage_backend;
mod browser_storage_backend_factory;
mod server_backend;
mod server_backend_factory;
mod transient_backend;
mod transient_backend_factory;
