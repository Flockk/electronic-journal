CREATE TABLE departments
(
    dept_id SERIAL PRIMARY KEY,
    div_id  INTEGER,
    title   VARCHAR(255) NOT NULL UNIQUE,
    CONSTRAINT fk_departments_divisions FOREIGN KEY (div_id) REFERENCES divisions (div_id)
);