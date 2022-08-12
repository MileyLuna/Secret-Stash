const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/detail/:id', (req, res) => {
    if (req.isAuthenticated()) {
        const id = req.params.id;

        const query = `SELECT * FROM "ingredient" WHERE "recipe_id" = $1;`;
        pool.query(query, [id])
            .then(result => {
                res.send(result.rows);
            })
            .catch(err => {
                console.log('ERROR: Get selected ingredient', err);
                res.sendStatus(500)
            })
    } else {
        res.sendStatus(403);
    }


});

router.post('/add', (req, res) => {
    const item = req.body;

    console.log('addIngredient:',req.body);

    const addInstruction = `INSERT INTO "ingredient" ("amount", "unit", "ingredient","recipe_id")
    VALUES ($1,$2,$3,$4)
    RETURNING "recipe_id";`;

    pool.query (addInstruction, [item.amount, item.unit, item.ingredient, item.recipe_id])
    .then(result => {
        console.log ('ingredient result:', result.rows);
        res.send(result.rows);
    }).catch (err => {
        console.log('ERROR: ADD router:', err);
        res.sendStatus(500)
    })

})

router.put('/edit/:id', (req,res) => {
    const id = req.params.id;
    const item = req.body;

    console.log('ingredient PUT req.body is:', req.body);

    const query = `UPDATE "ingredient" 
    SET "amount" = $1,
    "unit" = $2,
    "ingredient" = $3
    WHERE "id" = $4;`;

    pool.query(query, [item.amount, item.unit, item.ingredient, id])
    .then(result => {
        console.log('ingredient PUT:', result);
        res.send(200);
    })
    .catch(err => {
        console.log('ERROR: PUT ingredient router', err);
        res.sendStatus(500)
    })


});

router.delete('/delete/:id', (req, res) => {
    if (req.isAuthenticated()) {
        const id = req.params.id;

        const query = `DELETE FROM "ingredient" WHERE "id" = $1 RETURNING "recipe_id" ;`;
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