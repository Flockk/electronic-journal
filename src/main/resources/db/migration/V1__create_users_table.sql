CREATE TABLE users
(
    user_id         SERIAL PRIMARY KEY,
    firstname  VARCHAR(255) NOT NULL,
    lastname   VARCHAR(255) NOT NULL,
    patronymic VARCHAR(255) DEFAULT NULL,
    login      VARCHAR(255) NOT NULL UNIQUE,
    password   VARCHAR(255) NOT NULL
);