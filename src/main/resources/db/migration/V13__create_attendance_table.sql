CREATE TABLE attendance
(
    attend_id  SERIAL PRIMARY KEY,
    lsn_id     INTEGER,
    stud_id    INTEGER,
    prof_id    INTEGER,
    is_present BOOLEAN,
    CONSTRAINT fk_attendance_lessons FOREIGN KEY (lsn_id) REFERENCES lessons (lsn_id),
    CONSTRAINT fk_attendance_students FOREIGN KEY (stud_id) REFERENCES students (stud_id),
    CONSTRAINT fk_attendance_professors FOREIGN KEY (prof_id) REFERENCES professors (prof_id)
);