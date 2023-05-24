CREATE TABLE audiences
(
    aud_id   SERIAL PRIMARY KEY,
    number   VARCHAR(5) NOT NULL,
    building SMALLINT   NOT NULL
);