
   
-- CREATE DATABASE "first-look"


-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "access_level" INT DEFAULT 0
);

CREATE TABLE "pets" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(80) NOT NULL,
    "user_id" INT REFERENCES "user"
);




CREATE TABLE home_page (
    img_passport VARCHAR PRIMARY KEY,
    img_flight INTEGER,
    img_suitcase INTEGER,
    img_question INTEGER,
    img_calendar VARCHAR,
    img_translator VARCHAR,
    img_guest INTEGER,
    img_bed INTEGER,
    FOREIGN KEY (img_flight) REFERENCES flight_info (id),
    FOREIGN KEY (img_suitcase) REFERENCES suitcase (id),
    FOREIGN KEY (img_question) REFERENCES questions (id),
    FOREIGN KEY (img_guest) REFERENCES guest_info (id),
    FOREIGN KEY (img_bed) REFERENCES lodge (id)
);
CREATE TABLE guest_info (
    id SERIAL PRIMARY KEY,
    guest_phone VARCHAR,
    guest_email VARCHAR,
    guest_name VARCHAR
);

CREATE TABLE flight_info (
    id SERIAL PRIMARY KEY,
    gues_name VARCHAR,
    flight_date DATE,
    from_city VARCHAR,
    to_city VARCHAR,
    airline VARCHAR,
    flight_number VARCHAR,
    depart_time TIME,
    arrival_time TIME
);



CREATE TABLE lodge (
    id SERIAL PRIMARY KEY,
    gues_name VARCHAR,
    lodge_name VARCHAR,
    address VARCHAR,
    departure_date DATE,
    arrival_date DATE
);

CREATE TABLE questions (
    id SERIAL PRIMARY KEY,
    questions_field VARCHAR,
    answers_field VARCHAR,
    notes_field VARCHAR
);

CREATE TABLE suitcase (
    id SERIAL PRIMARY KEY,
    bring VARCHAR,
    dont_bring VARCHAR
);
CREATE TABLE trip (
    id SERIAL PRIMARY KEY,
    tripname VARCHAR UNIQUE,
    password VARCHAR,
    trip_id VARCHAR 
);
-- REFERENCES home_page (img_passport)