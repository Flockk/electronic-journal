CREATE TABLE lessons_audiences
(
    lsn_id INTEGER,
    aud_id INTEGER,
    PRIMARY KEY (lsn_id, aud_id),
    CONSTRAINT fk_lessons_audiences_lessons FOREIGN KEY (lsn_id) REFERENCES lessons (lsn_id),
    CONSTRAINT fk_lessons_audiences_audiences FOREIGN KEY (aud_id) REFERENCES audiences (aud_id)
);