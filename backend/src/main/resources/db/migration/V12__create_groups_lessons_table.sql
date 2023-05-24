CREATE TABLE groups_lessons
(
    group_id INTEGER,
    lsn_id   INTEGER,
    PRIMARY KEY (group_id, lsn_id),
    CONSTRAINT fk_groups_lessons_groups FOREIGN KEY (group_id) REFERENCES groups (group_id),
    CONSTRAINT fk_groups_lessons_lessons FOREIGN KEY (lsn_id) REFERENCES lessons (lsn_id)
);