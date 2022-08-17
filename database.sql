
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE DATABASE NAME "secret_stash"

CREATE TABLE "user" (
  "id" SERIAL PRIMARY KEY,
  "username" VARCHAR (80) UNIQUE NOT NULL,
  "password" VARCHAR (1000) NOT NULL,
  "image" VARCHAR (255)
);

CREATE TABLE "recipe" (
  "id" SERIAL PRIMARY KEY,
  "title" VARCHAR(120) NOT NULL,
  "poster"  VARCHAR(120),
  "user_id" INT REFERENCES "user" ON DELETE CASCADE
);

CREATE TABLE "ingredient" (
  "id" SERIAL PRIMARY KEY,
  "amount" VARCHAR(20) NOT NULL,
  "unit"  VARCHAR(20) NOT NULL,
  "ingredient" VARCHAR(100) NOT NULL,
  "recipe_id" INT REFERENCES "recipe" ON DELETE CASCADE
);

CREATE TABLE "instruction" (
  "id" SERIAL PRIMARY KEY,
  "step_num" VARCHAR(20),
  "text"  TEXT,
  "recipe_id" INT REFERENCES "recipe" ON DELETE CASCADE
);

INSERT INTO "recipe" 
("title","poster","user_id")
VALUES 
('Papaya Salad','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScY8r1sZFoi4JhHgN4Zdcm1CFYB_In1fCY2Q&usqp=CAU','1'),
('Capellini Pomodoro','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlM2MdH1vkf3FwDHb9t6lYqeBXtvGVcaDmNA&usqp=CAU','1'),
('Thai Coconut Jello','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrXwqupp_ZP7NCvTqkHMYd8KtyCG_dYEn43w&usqp=CAU','1'),
('Boil Pork','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS4mT0KzfkTjxviJ8qf1irmJOOCPpMdj4q6A&usqp=CAU','1'),
('Laab','https://hot-thai-kitchen.com/wp-content/uploads/2016/06/Laab-gai-sm.jpg','1');