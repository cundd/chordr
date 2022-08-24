#[derive(Debug, Clone, PartialEq)]
pub struct Config {
    api_url: String,
}

impl Config {
    pub fn api_url(&self) -> &str {
        &self.api_url
    }
}

impl Default for Config {
    fn default() -> Self {
        Self {
            api_url: "http://localhost:9000/api".to_string(),
        }
    }
}
