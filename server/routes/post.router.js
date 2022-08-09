const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * POST route template
 */
router.post('/', (req, res) => {
    let createdRecipeId;
    const id = req.user.id;
    console.log('what is this:', req.body);
    // console.log('user id is:', id);
    // console.log('this is name:', req.body.title);
    // console.log('this is step_num:', req.body.instruction.step);
    // console.log('this is text:', req.body.instruction.text);
    // console.log('this is amount:', req.body.ingredient.amout);
    // console.log('this is unit:', req.body.ingredient.unit);
    // console.log('this is ingredient:', req.body.ingredient.ingredient);

    // RETURNING "id" will give us back the id of the created movie
    const insertRecipe = `INSERT INTO "recipe" ("title", "user_id")
    VALUES ($1, $2)
    RETURNING "id";`

    // FIRST QUERY MAKES recipe
    pool.query(insertRecipe, [req.body.title, id])
        .then(result => {
            console.log('New recipe Id:', result.rows[0].id); //ID IS HERE!

            //variable to returned Recipe ID
            createdRecipeId = result.rows[0].id

            //intruction reference

            const instruction = req.body.instruction;
            const insertInstruction = `
        INSERT INTO "instruction" ("step_num", "text", "recipe_id")
        VALUES  ($1, $2, $3);
        `
            for (let i = 0; i < instruction.length; i++) {
                pool.query(insertInstruction, [instruction[i].step, instruction[i].text, createdRecipeId])
                    .then(result => {
                        // console.log(result)
                    }).catch(err => {
                        console.log('intruction INSERT:', err);
                        res.sendStatus(500)
                    })
            }


            //ingredient reference
            const insertIngredient = `
                    INSERT INTO "ingredient" ("amount", "unit", "ingredient","recipe_id")
                    VALUES ($1,$2,$3, $4);`;

            const ingredient = req.body.ingredient;

            for (let i = 0; i < ingredient.length; i++) {
                pool.query(insertIngredient, [ingredient[i].amount, ingredient[i].unit, ingredient[i].ingredient, createdRecipeId])
                    .then(result => {
                        // console.log(result)
                    }).catch(err => {
                        console.log('ingredient INSERT:', err);
                        res.sendStatus(500)
                    })
            }
            // Catch for first query
        }).catch('POST server 1st query:', err => {
            console.log(err);
            res.sendStatus(500)
        })
})

module.exports = router;