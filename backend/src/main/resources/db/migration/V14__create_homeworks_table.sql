CREATE TABLE homeworks
(
    hw_id           SERIAL PRIMARY KEY,
    lsn_id          INTEGER,
    prof_id         INTEGER,
    description     TEXT,
    foundation_date DATE,
    end_date        DATE,
    CONSTRAINT fk_homeworks_lessons FOREIGN KEY (lsn_id) REFERENCES lessons (lsn_id),
    CONSTRAINT fk_homeworks_professors FOREIGN KEY (prof_id) REFERENCES professors (prof_id)
);