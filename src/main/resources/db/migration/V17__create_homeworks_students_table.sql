CREATE TABLE homeworks_students
(
    hw_id   INTEGER,
    stud_id INTEGER,
    PRIMARY KEY (hw_id, stud_id),
    CONSTRAINT fk_homeworks_students_homeworks FOREIGN KEY (hw_id) REFERENCES homeworks (hw_id),
    CONSTRAINT fk_homeworks_students_students FOREIGN KEY (stud_id) REFERENCES students (stud_id)
);