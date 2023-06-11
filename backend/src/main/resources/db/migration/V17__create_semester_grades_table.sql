CREATE TABLE semester_grades
(
    sem_grade_id SERIAL PRIMARY KEY,
    sem_id       INTEGER,
    stud_id      INTEGER,
    prof_id      INTEGER,
    disc_id      INTEGER,
    value        INTEGER,
    CONSTRAINT fk_semester_grades_semesters FOREIGN KEY (sem_id) REFERENCES semesters (sem_id),
    CONSTRAINT fk_semester_grades_students FOREIGN KEY (stud_id) REFERENCES students (stud_id),
    CONSTRAINT fk_semester_grades_professors FOREIGN KEY (prof_id) REFERENCES professors (prof_id),
    CONSTRAINT fk_semester_grades_disciplines FOREIGN KEY (disc_id) REFERENCES disciplines (disc_id)
);