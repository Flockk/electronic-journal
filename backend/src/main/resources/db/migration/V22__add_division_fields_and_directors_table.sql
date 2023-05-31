ALTER TABLE divisions
    ADD COLUMN phone      VARCHAR(50),
    ADD COLUMN email      VARCHAR(50),
    ADD COLUMN address    VARCHAR(50),
    ADD COLUMN start_time TIME,
    ADD COLUMN end_time   TIME;

CREATE TABLE division_directors
(
    director_id SERIAL PRIMARY KEY,
    div_id      INT          NOT NULL UNIQUE,
    name        VARCHAR(255) NOT NULL,
    email       VARCHAR(255),
    phone       VARCHAR(255),
    address     VARCHAR(255),
    image       BYTEA,
    FOREIGN KEY (div_id) REFERENCES divisions (div_id)
);

-- Заполнение таблицы divisions
INSERT INTO divisions (title, phone, email, address, start_time, end_time)
VALUES ('Институт авиации, наземного транспорта и энергетики', '+7 (843) 231 03 98', 'iante@kai.ru',
        'г. Казань, ул. Толстого, 15', '09:00', '17:00'),
       ('Физико-математический факультет ', '+7 (843) 231 02 08', 'fmf@kai.ru',
        'г. Казань, ул. Четаева, 18', '9:00', '17:00'),
       ('Институт автоматики и электронного приборостроения', '+7 (843) 231 03 94',
        'dekanat3@mail.ru', 'г. Казань, ул. Толстого, 15', '9:00', '17:00'),
       ('Институт компьютерных технологий и защиты информации', '+7 (843) 231 16 51', 'itki@kai.ru',
        'г. Казань, ул. Б. Красная, 55', '09:00', '17:00'),
       ('Институт радиоэлектроники, фотоники и цифровых технологий', '+7 (843) 231 59 12', NULL,
        'г. Казань, ул. Карла Маркса, 31/7', '09:00', '17:00'),
       ('Институт инженерной экономики и предпринимательства', '+7 (843) 231 02 36', 'ieust@kai.ru',
        'г. Казань, ул. Четаева, 18', '09:00', '17:00');

INSERT INTO division_directors (div_id, name, email, phone, address, image)
VALUES (1, 'Магсумова Айзада Фазыляновна', 'afmagsumova@kai.ru', '+7 (843) 231 03 98',
        'г. Казань, ул. Толстого, 15 ', NULL),
       (2, 'Галимова Руфина Камилевна', 'fmf@kai.ru', '+7 (843) 231 02 04',
        'г. Казань, ул. Четаева, д.18, ауд. 404', NULL),
       (3, 'Ференец Андрей Валентинович', 'dekanat3@mail.ru', '+7 (843) 231 03 94',
        'г. Казань, ул. Толстого д. 15, 3-е учебное здание, ауд. 201', NULL),
       (4, 'Трегубов Владимир Михайлович', 'VMTregubov@kai.ru', '+7(843) 231 16 51',
        'г. Казань, ул. Б. Красная, 55', NULL),
       (5, 'Надеев Адель Фирадович', 'AFNadeev@kai.ru', '+7 (843) 231 59 11',
        'г. Казань, ул. Карла Маркса, 31/7', NULL),
       (6, 'Юдина Светлана Валентиновна', 'ieust@kai.ru', '+7 (843) 231 02 36',
        'г. Казань, ул. Четаева, 18, к. 423, 439', NULL);

