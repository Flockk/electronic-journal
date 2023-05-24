CREATE TABLE grades
(
    grade_id SERIAL PRIMARY KEY,
    lsn_id   INTEGER,
    hw_id    INTEGER,
    stud_id  INTEGER,
    prof_id  INTEGER,
    type     VARCHAR(20),
    date     TIMESTAMP,
    value    NUMERIC(4, 2),
    CONSTRAINT fk_grades_lessons FOREIGN KEY (lsn_id) REFERENCES lessons (lsn_id),
    CONSTRAINT fk_grades_homeworks FOREIGN KEY (hw_id) REFERENCES homeworks (hw_id),
    CONSTRAINT fk_grades_students FOREIGN KEY (stud_id) REFERENCES students (stud_id),
    CONSTRAINT fk_grades_professors FOREIGN KEY (prof_id) REFERENCES professors (prof_id)
);