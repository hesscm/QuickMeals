
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

CREATE TABLE "user" (
	"id" serial NOT NULL,
	"username" varchar(80) NOT NULL UNIQUE,
	"password" varchar(1000) NOT NULL,
	CONSTRAINT "user_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


CREATE TABLE "meals" (
	"id" serial NOT NULL,
	"api_id" integer NOT NULL,
	"name" varchar(255) NOT NULL,
	"description" TEXT NOT NULL,
	"instructions" TEXT NOT NULL,
	"ingredients" TEXT NOT NULL,
	"ingredients_string" TEXT NOT NULL,
	"number_servings" integer NOT NULL,
	"image_path" varchar(255),
	CONSTRAINT "meals_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "user_meals" (
	"id" serial NOT NULL,
	"user_id" integer NOT NULL,
	"meals_id" integer NOT NULL,
	"is_saved" boolean NOT NULL DEFAULT FALSE,
	"day" varchar(25) NOT NULL,
	CONSTRAINT "user_meals_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "user_saved_meals" (
	"id" serial NOT NULL,
	"user_id" integer NOT NULL,
	"meals_id" integer NOT NULL,
	"date" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
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
    SELECT 1 AS api_id, 
           'name' AS name,
	'desc' AS description,
	'instruc' AS instructions,
	'path' AS image_path,
	'day' AS day,
           jsonb_array_elements('
               [
    {
        "name": "skinless boneless chicken breast halves",
        "amount": 3,
        "unit": "",
        "fullString": "3 boneless/skinless chicken breast halves"
    },
    {
        "name": "salt",
        "amount": 1,
        "unit": "teaspoon",
        "fullString": "1 teaspoon salt"
    }
]'::jsonb) AS ingredients
)
INSERT INTO meals (api_id, name, description, instructions, image_path, day, ingredients) 
SELECT * FROM json_array