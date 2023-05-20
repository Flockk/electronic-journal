CREATE TABLE professors_disciplines
(
    prof_id INTEGER,
    disc_id INTEGER,
    PRIMARY KEY (prof_id, disc_id),
    CONSTRAINT fk_professors_disciplines_professors FOREIGN KEY (prof_id) REFERENCES professors (prof_id),
    CONSTRAINT fk_professors_disciplines_disciplines FOREIGN KEY (disc_id) REFERENCES disciplines (disc_id)
);