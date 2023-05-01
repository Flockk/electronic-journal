CREATE TABLE users
(
    user_id         SERIAL PRIMARY KEY,
    user_firstname  VARCHAR(255) NOT NULL,
    user_lastname   VARCHAR(255) NOT NULL,
    user_patronymic VARCHAR(255) DEFAULT NULL,
    user_login      VARCHAR(255) NOT NULL UNIQUE,
    user_password   VARCHAR(255) NOT NULL
);