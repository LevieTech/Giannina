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
"id" INTEGER FOREIGN KEY > guest.id
"user_id" INTEGER > trip.id
"category_id" INTEGER > category.id
"entry_text" VARCHAR
"created_at" TIMESTAMP
);
-- "entry": info that a user writes about a specific trip. each entry has an "id" number, and 
-- "user_id":the id of the user who wrote the entry and a:
-- "trip_id": the id of the trip the entry is related to
-- "category_id": the id of the category the entry belongs to 
-- "entry_text": the actual content of the entry
-- "created_at": date and time of when the entry was created
-- each entry is associated w a user bc it has a user id that corresponds to the id of the user who wrote the entry
-- each entry is associated with a trip through trip id. this connection indicates which trip the entry is related to.
-- entries are connected to categories through category id .This allows users to assign a category to each entry indicating its topic. Users can choose from existing categories or create new ones. 
-- The user id in the trip table links each trip to the corresponding user. This connection establishes which user took a spesific trip


CREATE TABLE "category"(
"id" INTEGER PRIMARY KEY
"type" VARCHAR
);
-- "category": way to group entries based on their type. Each category has:
-- "id": unique number
-- "type": NAME for the category EX: flightinfo
-- categories help organize entries so that users can easily find or filter entries based on specific topics or interests




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
