CREATE TABLE groups
(
    group_id        SERIAL PRIMARY KEY,
    prof_id         INTEGER,
    title           VARCHAR(20) NOT NULL,
    foundation_date DATE,
    end_date        DATE,
    CONSTRAINT fk_groups_professors FOREIGN KEY (prof_id) REFERENCES professors (prof_id)
);