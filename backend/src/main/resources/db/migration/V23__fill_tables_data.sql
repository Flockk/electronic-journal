-- Добавление ограничения CHECK для нового формата номера телефона
ALTER TABLE divisions
    ADD CONSTRAINT chk_phone_number CHECK (phone ~ '^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$');

-- Заполнение таблицы подразделений
INSERT INTO divisions (title, phone, email, address, start_time, end_time)
VALUES ('Институт авиации, наземного транспорта и энергетики', '+7 (843) 231-03-98', 'iante@kai.ru',
        'г. Казань, ул. Толстого, 15', '09:00', '17:00'),
       ('Физико-математический факультет ', '+7 (843) 231-02-08', 'fmf@kai.ru',
        'г. Казань, ул. Четаева, 18', '9:00', '17:00'),
       ('Институт автоматики и электронного приборостроения', '+7 (843) 231-03-94',
        'dekanat3@mail.ru', 'г. Казань, ул. Толстого, 15', '9:00', '17:00'),
       ('Институт компьютерных технологий и защиты информации', '+7 (843) 231-16-51', 'itki@kai.ru',
        'г. Казань, ул. Б. Красная, 55', '09:00', '17:00'),
       ('Институт радиоэлектроники, фотоники и цифровых технологий', '+7 (843) 231-59-12', NULL,
        'г. Казань, ул. Карла Маркса, 31/7', '09:00', '17:00'),
       ('Институт инженерной экономики и предпринимательства', '+7 (843) 231-02-36', 'ieust@kai.ru',
        'г. Казань, ул. Четаева, 18', '09:00', '17:00');

-- Добавление ограничения CHECK для нового формата номера телефона
ALTER TABLE division_directors
    ADD CONSTRAINT chk_phone_number CHECK (phone ~ '^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$');

-- Заполнение таблицы директоров подразделений
INSERT INTO division_directors (div_id, name, email, phone, address, image)
VALUES (1, 'Магсумова Айзада Фазыляновна', 'afmagsumova@kai.ru', '+7 (843) 231-03-98',
        'г. Казань, ул. Толстого, 15 ', NULL),
       (2, 'Галимова Руфина Камилевна', 'fmf@kai.ru', '+7 (843) 231-02-04',
        'г. Казань, ул. Четаева, д.18, ауд. 404', NULL),
       (3, 'Ференец Андрей Валентинович', 'dekanat3@mail.ru', '+7 (843) 231-03-94',
        'г. Казань, ул. Толстого д. 15, 3-е учебное здание, ауд. 201', NULL),
       (4, 'Трегубов Владимир Михайлович', 'VMTregubov@kai.ru', '+7 (843) 231-16-51',
        'г. Казань, ул. Б. Красная, 55', NULL),
       (5, 'Надеев Адель Фирадович', 'AFNadeev@kai.ru', '+7 (843) 231-59-11',
        'г. Казань, ул. Карла Маркса, 31/7', NULL),
       (6, 'Юдина Светлана Валентиновна', 'ieust@kai.ru', '+7 (843) 231-02-36',
        'г. Казань, ул. Четаева, 18, к. 423, 439', NULL);

-- Заполнение таблицы кафедр
INSERT INTO departments (div_id, title)
VALUES (4, 'Кафедра компьютерных систем'),
       (4, 'Кафедра систем автоматизированного проектирования'),
       (4, 'Кафедра автоматизированных систем обработки информации и управления'),
       (4, 'Кафедра прикладной математики и информатики'),
       (4, 'Кафедра систем информационной безопасности'),
       (4, 'Кафедра динамики процессов и управления');

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
INSERT INTO professors (user_id, dept_id, position, phone_number)
VALUES (2, 4, 'Доцент', NULL);

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
