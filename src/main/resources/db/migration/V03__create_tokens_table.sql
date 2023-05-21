CREATE TABLE tokens
(
    token_id   SERIAL PRIMARY KEY,
    user_id    INTEGER,
    value      VARCHAR(255) NOT NULL,
    type       VARCHAR(6)   NOT NULL,
    is_expired BOOLEAN      NOT NULL,
    is_revoked BOOLEAN      NOT NULL,
    CONSTRAINT fk_tokens_users FOREIGN KEY (user_id) REFERENCES users (user_id)
);