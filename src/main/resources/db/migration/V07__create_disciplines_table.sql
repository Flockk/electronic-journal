CREATE TABLE disciplines
(
    disc_id SERIAL PRIMARY KEY,
    name    VARCHAR(255) NOT NULL UNIQUE
);