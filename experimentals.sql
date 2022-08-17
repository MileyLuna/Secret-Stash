INSERT INTO "ingredient" ("amount","unit", "ingredient","recipe_id")
VALUES
('','','','');

INSERT INTO "instruction" ("step_num","text","recipe_id")
VALUES
('','','12'),;

SELECT * FROM "recipe" WHERE "user_id" = 1;

SELECT * FROM "instruction"
JOIN "recipe" ON "instruction"."recipe_id" = "recipe"."id"
WHERE "recipe"."id" = 10;

SELECT * FROM "instruction" WHERE "recipe_id" = 10;

SELECT * FROM "ingredient" WHERE "recipe_id" = 10;


SELECT * FROM "recipe" WHERE "id" = 7;

INSERT INTO "recipe" ("title")
VALUES ('curry');
RETURNING "user_id";

DELETE FROM "recipe" 
JOIN "ingredient" ON "recipe"."id" = "ingredient"."recipe_id"
JOIN "instruction" ON "recipe"."id" = "instruction"."recipe_id"
WHERE "id" = 9;

INSERT INTO "ingredient" ("ingredient")
VALUES ('curry')
WHERE "recipe_id" = 6;

UPDATE "ingredient" 
SET 
"amount" = 'hehe',
"unit" = 'hehe',
"ingredient" = 'hehe'
WHERE "id" = 84;

UPDATE "instruction" SET 
"step_num" = 1,
"text" = 'what'
WHERE "id" = 84;

DELETE FROM "ingredient" WHERE "id" = 90;

SELECT * FROM "instruction" WHERE "recipe_id" = 1
ORDER BY "step_num" ASC;


CREATE TABLE "favorite" (
  "id" SERIAL PRIMARY KEY,
  "recipe_id" INT REFERENCES "recipe" ON DELETE CASCADE

);
ALTER TABLE "favorite"
ADD COLUMN "user_id" INT REFERENCES "user";

INSERT INTO "favorite" ("recipe_id", "user_id")
VALUES ('1','1'), ('2','1'), ('5','2'),('1','2');

search query
 if no values put coalesce infront. ex)||coalesce(title,'')
SELECT * from "favorite"
JOIN "recipe" ON "favorite"."recipe_id" = "recipe"."id"
JOIN "instruction" ON "recipe"."id" = "instruction"."recipe_id"
JOIN "ingredient" ON "recipe"."id" = "ingredient"."recipe_id"
WHERE to_tsvector(title||''||ingredient) @@ to_tsquery('chicken');

SELECT "favorite"."recipe_id" AS "id", "recipe"."title" AS "title", "recipe"."poster" AS "image", "recipe"."user_id", array_agg("ingredient"."unit","ingredient"."amount", "ingredient"."ingredient"), array_agg("instruction"."step_num","instruction"."step_num", "instruction"."text")from "favorite"
JOIN "recipe" ON "favorite"."recipe_id" = "recipe"."id"
JOIN "instruction" ON "recipe"."id" = "instruction"."recipe_id"
JOIN "ingredient" ON "recipe"."id" = "ingredient"."recipe_id"
WHERE "favorite"."recipe_id" = 1 AND "favorite"."user_id" = 1
GROUP BY "id";

SELECT "favorite"."recipe_id" AS "id", "recipe"."title" AS "title", "recipe"."poster" AS "image", "recipe"."user_id", array_agg("ingredient"."unit",) AS "unit", array_agg("ingredient"."amount") AS "amount", array_agg("ingredient"."ingredient") AS "ingredient", "instruction"."step_num" AS "step", "instruction"."text" AS "text" from "favorite"
JOIN "recipe" ON "favorite"."recipe_id" = "recipe"."id"
JOIN "instruction" ON "recipe"."id" = "instruction"."recipe_id"
JOIN "ingredient" ON "recipe"."id" = "ingredient"."recipe_id"
WHERE "favorite"."recipe_id" = 1 AND "favorite"."user_id" = 1
GROUP BY "id";


SELECT array_agg(*) from "favorite"
JOIN "recipe" ON "favorite"."recipe_id" = "recipe"."id"
JOIN "instruction" ON "recipe"."id" = "instruction"."recipe_id"
JOIN "ingredient" ON "recipe"."id" = "ingredient"."recipe_id"
WHERE "favorite"."recipe_id" = 1 AND "favorite"."user_id" = 1;


ALTER TABLE "instruction"
ALTER COLUMN "step_num" TYPE VARCHAR(10);

ALTER TABLE "instruction"
ALTER COLUMN "step_num" DROP NOT NULL;

ALTER TABLE "instruction"
ADD CONSTRAINT
"recipe_id"
FOREIGN KEY ("recipe_id")
REFERENCES "recipe"("id") ON DELETE CASCADE;

ALTER TABLE "ingredient"
ADD CONSTRAINT
"recipe_id"
FOREIGN KEY ("recipe_id")
REFERENCES "recipe"("id") ON DELETE CASCADE;

drop table "ingredient";

ALTER TABLE "recipe"
DROP COLUMN password;

ALTER TABLE "recipe"
ADD "password" VARCHAR (1000) NOT NULL;

ALTER TABLE "recipe"
ADD CONSTRAINT ON DELETE CASCADE (id);