use diesel::{self, prelude::*};

use crate::diesel::QueryDsl;
use crate::domain::user::UserDb;
use crate::error::SrvError;
use crate::schema::user::dsl::user as all_users;
use crate::ConnectionType;

pub(crate) struct UserCommandExecutor<'a> {
    connection: &'a ConnectionType,
}

impl<'a> UserCommandExecutor<'a> {
    pub(crate) fn with_connection(connection: &'a ConnectionType) -> Self {
        Self { connection }
    }
}

impl<'a> cqrs::prelude::CommandExecutor for UserCommandExecutor<'_> {
    type RecordType = UserDb;
    type Error = SrvError;

    fn add(&self, command: cqrs::prelude::Command<Self::RecordType>) -> Result<(), Self::Error> {
        diesel::insert_into(crate::schema::user::table)
            .values(command.record().unwrap())
            .execute(self.connection)?;
        Ok(())
    }

    fn update(&self, command: cqrs::prelude::Command<Self::RecordType>) -> Result<(), Self::Error> {
        let user = command.record().unwrap();
        let user_query = all_users.find(user.id());
        if user_query.get_result::<UserDb>(self.connection).is_err() {
            return Err(SrvError::persistence_error(format!(
                "Original object with ID '{}' could not be found",
                user.id()
            )));
        }

        diesel::update(user_query)
            .set(user)
            .execute(self.connection)?;

        Ok(())
    }

    fn delete(&self, command: cqrs::prelude::Command<Self::RecordType>) -> Result<(), Self::Error> {
        diesel::delete(all_users.find(&command.id().unwrap())).execute(self.connection)?;
        Ok(())
    }
}

#[cfg(test)]
mod test {
    use cqrs::prelude::{Command, CommandExecutor};

    use crate::domain::user::UserDb;
    use crate::test_helpers::*;
    use crate::traits::Count;
    use crate::ConnectionType;

    use super::*;

    #[test]
    fn test_add() {
        run_database_test(|conn| {
            clear_database(&conn);

            let new_user = UserDb {
                username: "superhacker-918".to_string(),
                first_name: "Super".to_string(),
                last_name: "Hacker".to_string(),
                password_hash: "123456".to_string(),
            };

            CommandExecutor::perform(
                &UserCommandExecutor::with_connection(&conn),
                Command::add(new_user),
            )
            .unwrap();

            assert_eq!(count_all_users(&conn), 1);
        })
    }

    #[test]
    fn test_update() {
        run_database_test(|conn| {
            clear_database(&conn);
            insert_test_user(&conn, "saul-panther-918", "Saul", "Panther");
            insert_test_user(&conn, "roger-mulliger-8", "Roger", "Mulliger");
            assert_eq!(count_all_users(&conn), 2);

            CommandExecutor::perform(
                &UserCommandExecutor::with_connection(&conn),
                Command::update(UserDb {
                    username: "saul-panther-918".to_string(), // Same username
                    first_name: "Paul".to_string(),           // New name
                    last_name: "Panther".to_string(),
                    password_hash: "123456".to_string(),
                }),
            )
            .unwrap();

            assert_eq!(count_all_users(&conn), 2);
        })
    }

    #[test]
    fn test_delete() {
        run_database_test(|conn| {
            clear_database(&conn);

            insert_test_user(&conn, "saul-panther-918", "Saul", "Panther");
            insert_test_user(&conn, "roger-mulliger-8", "Roger", "Mulliger");
            assert_eq!(count_all_users(&conn), 2);

            CommandExecutor::perform(
                &UserCommandExecutor::with_connection(&conn),
                Command::delete("saul-panther-918".to_string()),
            )
            .unwrap();

            assert_eq!(count_all_users(&conn), 1);
        })
    }

    fn count_all_users(conn: &ConnectionType) -> Count {
        all_users.count().get_result(conn).unwrap()
    }

    fn clear_database(conn: &ConnectionType) {
        assert!(
            diesel::delete(all_users).execute(conn).is_ok(),
            "Failed to delete all data before testing"
        );
    }
}
