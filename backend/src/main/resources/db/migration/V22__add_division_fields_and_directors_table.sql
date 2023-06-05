ALTER TABLE divisions
    ADD COLUMN phone      VARCHAR(50),
    ADD COLUMN email      VARCHAR(50),
    ADD COLUMN address    VARCHAR(50),
    ADD COLUMN start_time TIME,
    ADD COLUMN end_time   TIME;

CREATE TABLE division_directors
(
    director_id SERIAL PRIMARY KEY,
    div_id      INT          NOT NULL UNIQUE,
    name        VARCHAR(255) NOT NULL,
    email       VARCHAR(255),
    phone       VARCHAR(255),
    address     VARCHAR(255),
    image       BYTEA,
    FOREIGN KEY (div_id) REFERENCES divisions (div_id)
);
