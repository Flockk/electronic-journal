CREATE TABLE professors
(
    prof_id      SERIAL PRIMARY KEY,
    user_id      INTEGER,
    dept_id      INTEGER,
    position     VARCHAR(50),
    phone_number VARCHAR(20),
    CONSTRAINT fk_professors_users FOREIGN KEY (user_id) REFERENCES users (user_id),
    CONSTRAINT fk_professors_departments FOREIGN KEY (dept_id) REFERENCES departments (dept_id)
);