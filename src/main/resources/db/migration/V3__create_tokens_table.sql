CREATE TABLE tokens
(
    token_id      SERIAL PRIMARY KEY,
    token_value   VARCHAR(255) NOT NULL,
    token_type    VARCHAR(255)  NOT NULL,
    token_expired BOOLEAN      NOT NULL,
    token_revoked BOOLEAN      NOT NULL,
    user_id       BIGINT REFERENCES users (user_id)
);
