-- Заполнение таблицы дисциплин
INSERT INTO disciplines (name)
VALUES ('Объектно-ориентированное программирование'),
       ('Структуры и алгоритмы обработки данных'),
       ('Теория формальных языков и методы трансляции'),
       ('Системное программирование'),
       ('Администрирование компьютерных сетей');

-- Добавление ограничения CHECK для нового формата номера телефона
ALTER TABLE professors
    ADD CONSTRAINT chk_phone_number CHECK (phone_number ~ '^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$');

-- Заполнение таблицы преподавателей
INSERT INTO professors (user_id, position, phone_number)
VALUES (2, 'Доцент', NULL);

-- Связывание преподавателей с дисциплинами
INSERT INTO professors_disciplines (prof_id, disc_id)
VALUES (1, 1),
       (1, 2),
       (1, 3),
       (1, 4),
       (1, 5);

-- Заполнение таблицы групп
INSERT INTO groups (prof_id, title, foundation_date, end_date)
VALUES (1, '4310', '2020-09-01', '2024-07-01'),
       (1, '4311', '2020-09-01', '2024-07-01'),
       (1, '4312', '2020-09-01', '2024-07-01'),
       (1, '4317', '2020-09-01', '2024-07-01'),
       (1, '4318', '2020-09-01', '2024-07-01');

-- Добавление ограничения CHECK для нового формата номера телефона
ALTER TABLE students
    ADD CONSTRAINT chk_phone_number CHECK (phone_number ~ '^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$');

-- Заполнение таблицы студентов
INSERT INTO students (user_id, group_id, course, major, level, admission_date, graduation_date,
                      phone_number)
VALUES (3, 4, 3, 'Программная инженерия', 'Бакалавриат', '2020-09-01', NULL, '+7 (999) 999-99-99');

-- Заполнение таблицы semesters
ALTER TABLE semesters
    DROP COLUMN number;

INSERT INTO semesters (start_date, end_date)
VALUES ('2020-09-01', '2021-02-01'),
       ('2021-09-01', '2022-02-01'),
       ('2022-09-01', '2023-02-01'),
       ('2023-09-01', '2024-02-01');

-- Заполнение таблицы занятий
INSERT INTO lessons (disc_id, prof_id, type, date, topic)
VALUES (3, 1, 'LECTURE', '2023-02-06 13:30:00', 'Формальные языки'),
       (3, 1, 'LECTURE', '2023-02-13 13:30:00', 'Гомоморфизмы'),
       (3, 1, 'LECTURE', '2023-02-20 13:30:00', 'Порождающие грамматики'),
       (3, 1, 'LECTURE', '2023-02-27 13:30:00', 'Классы грамматик');

-- Связывание групп с занятиями
INSERT INTO groups_lessons (group_id, lsn_id)
VALUES (1, 1),
       (2, 1),
       (3, 1),
       (4, 1),
       (5, 1),
       (1, 2),
       (2, 2),
       (3, 2),
       (4, 2),
       (5, 2),
       (1, 3),
       (2, 3),
       (3, 3),
       (4, 3),
       (5, 3),
       (1, 4),
       (2, 4),
       (3, 4),
       (4, 4),
       (5, 4);

-- -- Заполнение таблицы домашних работ
ALTER TABLE homeworks
    ALTER COLUMN lsn_id SET NOT NULL,
    ALTER COLUMN prof_id SET NOT NULL,
    DROP COLUMN foundation_date,
    DROP COLUMN end_date;

-- Заполнение таблицы домашних заданий
INSERT INTO homeworks(lsn_id, prof_id, description)
VALUES (2, 1, 'Повторить тему "Формальные языки"'),
       (3, 1, 'Повторить тему "Формальные языки"');

-- Заполнение таблицы домашних заданий для групп
INSERT INTO homeworks_groups (hw_id, group_id)
VALUES (1, 1),
       (1, 2),
       (1, 3),
       (1, 4),
       (1, 5),
       (2, 1),
       (2, 2),
       (2, 3),
       (2, 4),
       (2, 5);
