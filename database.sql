CREATE TABLE "user" (  
"id" INTEGER PRIMARY KEY,
"user_name"VARCHAR,
"password" VARCHAR
);  
--"user": person who creates an accont on the website, like a profile for each person
-- "id": each user has a unique number assigned to them and a "password"

 
CREATE TABLE "trip" (
"id" INTEGER PRIMARY KEY,
"user_id" INTEGER, > guest.id
"description" VARCHAR,
"start_date" DATE,
"end_date" DATE
);
-- "trip": specific vacation that user takes. each trip has :
--"id": unique number
--"user_id": the id of the user who took the trip
--"description": explanation of the trip
-- "start_date" and "end_date"


CREATE TABLE "entry" (
"id" INTEGER PRIMARY KEY > guest.id
"user_id" INTEGER > trip.id
"category_id" INTEGER > category.id
"entry_text" VARCHAR
"created_at" TIMESTAMP
);
-- "category": way to group entries based on their type. Each category has:
-- "id": unique number
-- "type": NAME for the category EX: flightinfo
-- categories help organize entries so that users can easily find or filter entries based on specific topics or interests


CREATE TABLE "category"(
"id" INTEGER PRIMARY KEY
"type" VARCHAR
);
-- "category": way to group entries based on their type. Each category has:
-- "id": unique number
-- "type": NAME for the category EX: flightinfo
-- categories help organize entries so that users can easily find or filter entries based on specific topics or interests

INSERT INTO "category" ("id","type")
VALUES 
(1, 'Guest_Info'),
(2, 'Flight_Info'),
(3, 'Lodging'),
(4, 'Suitcase'),
(5, 'Q_&_A_Misc');

CREATE TABLE user_trip_entry (
  id integer PRIMARY KEY,
  user_id integer,
  trip_id integer,
  entry_id integer,
  category_id integer,
  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (trip_id) REFERENCES trips (id),
  FOREIGN KEY (entry_id) REFERENCES entries (id),
  FOREIGN KEY (category_id) REFERENCES categories (id)
);

INSERT INTO user_trip_entry (id, user_id, trip_id, entry_id, category_id)
VALUES (1, 1, 2, 3, 4);
-- -- CREATE DATABASE "first-look"
-- -- USER is a reserved keyword with Postgres
-- -- You must use double quotes in every query that user is in:
-- -- ex. SELECT * FROM "user";
-- -- Otherwise you will have errors!
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




-- CREATE TABLE home_page (
--     img_passport VARCHAR PRIMARY KEY,
--     img_flight INTEGER,
--     img_suitcase INTEGER,
--     img_question INTEGER,
--     img_calendar VARCHAR,
--     img_translator VARCHAR,
--     img_guest INTEGER,
--     img_bed INTEGER,
--     FOREIGN KEY (img_flight) REFERENCES flight (id),
--     FOREIGN KEY (img_suitcase) REFERENCES suitcase (id),
--     FOREIGN KEY (img_question) REFERENCES questions (id),
--     FOREIGN KEY (img_guest) REFERENCES guest_info (id),
--     FOREIGN KEY (img_bed) REFERENCES lodge (id)
-- );

CREATE TABLE CSV (
  id serial,
  CSV text
);

CREATE TABLE ages (
  id SERIAL PRIMARY KEY,
  gender VARCHAR(10),
  range VARCHAR(20),
  count INTEGER,
  type VARCHAR(20)
);

CREATE TABLE locations (
  id SERIAL PRIMARY KEY,
  neighborhood VARCHAR(255),
  city VARCHAR(255),
  count INTEGER,
  type VARCHAR(255)
);

CREATE TABLE prescriptions (
  id SERIAL PRIMARY KEY,
 name VARCHAR (255),
 count INT,
 type VARCHAR(255)
);

CREATE TABLE  patients_unique (
id SERIAL PRIMARY KEY, 
count INT
); 

CREATE TABLE pantients_visits(
id SERIAL,
count INTEGER,
type VARCHAR(255),
 );



CREATE TABLE family_size (
  id SERIAL 
  range VARCHAR(255),
  count INTEGER,
  type VARCHAR(255),
);
INSERT INTO family_size (range, count, type) VALUES
  ('1-2', 100, 'Nuclear'),
  ('3-4', 80, 'Nuclear'),
  ('5-6', 50, 'Extended'),
  ('7+', 20, 'Extended');

