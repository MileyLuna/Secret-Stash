const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//GET all recipes 
router.get('/', (req, res) => {
    if (req.isAuthenticated()) {
        const query = `SELECT * FROM "recipe";`;
        pool.query(query)
            .then(result => {
                res.send(result.rows);
            })
            .catch(err => {
                console.log('ERROR: Get all recipe', err);
                res.sendStatus(500)
            })
    } else {
        res.sendStatus(403);
    }

});


//GET selected recipe information
router.get('/detail/:id', (req, res) => {
    if (req.isAuthenticated()) {
        const id = req.params.id;

        const query = `SELECT * FROM "recipe" WHERE "id" = $1;`;
        pool.query(query, [id])
            .then(result => {
                res.send(result.rows);
            })
            .catch(err => {
                console.log('ERROR: Get selected recipe', err);
                res.sendStatus(500)
            })
    } else {
        res.sendStatus(403);
    }


});

const { rejectUnauthenticated } = require('../modules/authentication-middleware');

//GET user recipe information
router.get('/user', rejectUnauthenticated, (req, res) => {

    if (req.isAuthenticated()) {

        const query = `SELECT * FROM "recipe" WHERE "user_id" = ${req.user.user_id};`;

        pool.query(query)
            .then(result => {
                res.send(result.rows);
            })
            .catch(err => {
                console.log('ERROR: Get user recipe', err);
                res.sendStatus(500)
            })
    } else {
        res.sendStatus(403);
    }


});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    const item = req.body;

    const query = `INSERT INTO "recipe" ("title","user_id")
    VALUES ($1, $2);`;

    pool.query(query, [item.title, item.user_id])
        .then((result) => {
            res.sendStatus(201);
            console.log('POST SERVER:', result.rows);
        })
    //Post update for recipe, ingredient, instruction
    router.post('/', (req, res) => {
        console.log(req.body);
        // RETURNING "id" will give us back the id of the created movie
        const insertRecipe = `INSERT INTO "recipe" ("title")
    VALUES ($1)
    RETURNING "id";`

        // FIRST QUERY MAKES recipe
        pool.query(insertRecipe, [req.body.title])
            .then(result => {
                console.log('New recipe Id:', result.rows[0].id); //ID IS HERE!

                const createdRecipeId = result.rows[0].id

                // Now handle the instruction reference
                const insertInstruction = `
        INSERT INTO "intruction" ("step_num", "text", "recipe_id)
        VALUES  ($1, $2, $3);
        `
                // SECOND QUERY ADDS instruction
                pool.query(insertInstruction, [req.body.step_num, req.body.text, createdRecipeId])
                    .then(result => {
                        // Now handle the ingredient reference
                        const insertIngredient = `
                    INSERT INTO "ingredient" ("amount", "unit", "ingredient","recipe_id")
                    VALUES ($1,$2,$3);`;

                        // THRID QUERY ADDS instruction
                        pool.query(insertIngredient, [req.body.amount, req.body.unit, req.body.ingredient, createdRecipeId])
                        //Now that all three are done, send back success!
                        res.sendStatus(201);

                    }).catch(err => {
                        // catch for second query
                        console.log('POST server 3rd query:', err);
                        res.sendStatus(500)
                    })
            }).catch(err => {
                // catch for second query
                console.log('POST server 2nd query:', err);
                res.sendStatus(500)
            })
        // Catch for first query
    }).catch('POST server 1st query:', err => {
        console.log(err);
        res.sendStatus(500)
    })
})



router.delete('/delete/:id', (req, res) => {
    if (req.isAuthenticated()) {
        const id = req.params.id;

        const query = `DELETE * FROM "recipe" WHERE "recipe_id" = $1;`;
        pool.query(query, [id])
            .then(result => {
                res.send(result.rows);
            })
            .catch(err => {
                console.log('ERROR: delete selected recipe', err);
                res.sendStatus(500)
            })
    } else {
        res.sendStatus(403);
    }


});

module.exports = router;