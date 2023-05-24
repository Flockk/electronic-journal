CREATE TABLE semesters
(
    sem_id     SERIAL PRIMARY KEY,
    number     SMALLINT NOT NULL,
    start_date DATE,
    end_date   DATE
);