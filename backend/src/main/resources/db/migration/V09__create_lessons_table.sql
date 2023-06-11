CREATE TABLE lessons
(
    lsn_id  SERIAL PRIMARY KEY,
    disc_id INTEGER,
    prof_id INTEGER,
    type    VARCHAR(25) NOT NULL,
    date    TIMESTAMP,
    topic   VARCHAR(255),
    CONSTRAINT fk_lessons_disciplines FOREIGN KEY (disc_id) REFERENCES disciplines (disc_id),
    CONSTRAINT fk_lessons_professors FOREIGN KEY (prof_id) REFERENCES professors (prof_id)
);