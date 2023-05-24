CREATE TABLE homeworks_groups
(
    hw_id    INTEGER,
    group_id INTEGER,
    PRIMARY KEY (hw_id, group_id),
    CONSTRAINT fk_homeworks_groups_homeworks FOREIGN KEY (hw_id) REFERENCES homeworks (hw_id),
    CONSTRAINT fk_homeworks_groups_groups FOREIGN KEY (group_id) REFERENCES groups (group_id)
);