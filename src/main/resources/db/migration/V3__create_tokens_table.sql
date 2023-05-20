CREATE TABLE tokens
(
    token_id   SERIAL PRIMARY KEY,
    value      VARCHAR(255) NOT NULL,
    type       VARCHAR(255) NOT NULL,
    is_expired BOOLEAN      NOT NULL,
    is_revoked BOOLEAN      NOT NULL,
    user_id    BIGINT REFERENCES users (user_id)
);
