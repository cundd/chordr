use crate::metadata::iterator::{MetadataIterItem, FIELDS, FIELDS_LEN};
use crate::models::metadata::Metadata;
use crate::models::metadata::MetadataTrait;
use crate::models::song_metadata::SongMetadata;

/// Iterator for the owned `MetadataTrait` implementations
pub struct MetadataIntoIterator<T: MetadataTrait> {
    metadata: T,
    fields_cursor: usize,
}

impl<T: MetadataTrait> Iterator for MetadataIntoIterator<T> {
    type Item = MetadataIterItem;

    fn next(&mut self) -> Option<Self::Item> {
        if self.fields_cursor < FIELDS_LEN {
            let field = FIELDS[self.fields_cursor];
            self.fields_cursor += 1;

            Some(super::call_field_method(&self.metadata, field))
        } else {
            None
        }
    }
}

/// Implement `IntoIterator` for the owned `MetaInformation`
impl IntoIterator for Metadata {
    type Item = MetadataIterItem;
    type IntoIter = MetadataIntoIterator<Metadata>;

    fn into_iter(self) -> Self::IntoIter {
        MetadataIntoIterator {
            metadata: self,
            fields_cursor: 0,
        }
    }
}

/// Implement `IntoIterator` for the owned `SongMeta`
impl IntoIterator for SongMetadata {
    type Item = MetadataIterItem;
    type IntoIter = MetadataIntoIterator<SongMetadata>;

    fn into_iter(self) -> Self::IntoIter {
        MetadataIntoIterator {
            metadata: self,
            fields_cursor: 0,
        }
    }
}
