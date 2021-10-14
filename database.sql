
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
-- CREATE TABLE "user" (
--     "id" SERIAL PRIMARY KEY,
--     "username" VARCHAR (80) UNIQUE NOT NULL,
--     "password" VARCHAR (1000) NOT NULL
-- );

--SQL queries generated from DB Designer

CREATE TABLE "meals" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"description" varchar(255) NOT NULL,
	"instructions" TEXT NOT NULL,
	"ingredients" json NOT NULL,
	"image_path" varchar(255),
	"day" varchar(25) NOT NULL,
	CONSTRAINT "meals_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "user" (
	"id" serial NOT NULL,
	"username" varchar(80) NOT NULL UNIQUE,
	"password" varchar(1000) NOT NULL,
	"number_servings" integer NOT NULL,
	CONSTRAINT "user_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "user_meals" (
	"id" serial NOT NULL,
	"user_id" integer NOT NULL,
	"meals_id" integer NOT NULL,
	CONSTRAINT "user_meals_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "user_saved_meals" (
	"id" serial NOT NULL,
	"user_id" integer NOT NULL,
	"saved_meals_id" integer NOT NULL,
	"date" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
	"meals_id" integer NOT NULL,
	CONSTRAINT "user_saved_meals_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

ALTER TABLE "user_meals" ADD CONSTRAINT "user_meals_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");
ALTER TABLE "user_meals" ADD CONSTRAINT "user_meals_fk1" FOREIGN KEY ("meals_id") REFERENCES "meals"("id");

ALTER TABLE "user_saved_meals" ADD CONSTRAINT "user_saved_meals_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");
ALTER TABLE "user_saved_meals" ADD CONSTRAINT "user_saved_meals_fk2" FOREIGN KEY ("meals_id") REFERENCES "meals"("id");

---------------------
--POST QUERY
--Help from: https://dba.stackexchange.com/questions/152110/insert-array-of-json-into-postgres-table
WITH json_array AS (
    SELECT 
	446384, 
    'recipe name',
	'desc',
	'inst',
	'img.path',
	'Monday',
       jsonb_array_elements('[{
			"col1": "a",
			"col2": 1,
			"col3": 1,
			"col4": "one"
                 }]'::jsonb))
INSERT INTO meals (id, name, description, instructions, day, image_path, ingredients ) 
SELECT * FROM json_array;