CREATE TABLE students
(
    stud_id         SERIAL PRIMARY KEY,
    user_id         INTEGER,
    group_id        INTEGER,
    course          SMALLINT,
    major           VARCHAR(255) NOT NULL UNIQUE,
    level           VARCHAR(50),
    admission_date  DATE,
    graduation_date DATE,
    phone_number    VARCHAR(20),
    CONSTRAINT fk_students_users FOREIGN KEY (user_id) REFERENCES users (user_id),
    CONSTRAINT fk_students_groups FOREIGN KEY (group_id) REFERENCES groups (group_id)
);