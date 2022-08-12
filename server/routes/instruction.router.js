const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/detail/:id', (req, res) => {
    if (req.isAuthenticated()) {
        const id = req.params.id;

        const query = `SELECT * FROM "instruction" WHERE "recipe_id" = $1 ORDER BY "step_num" ASC;`;
        pool.query(query, [id])
            .then(result => {
                // console.log('result:', result.rows);
                res.send(result.rows);
            })
            .catch(err => {
                console.log('ERROR: Get user instruction', err);
                res.sendStatus(500)
            })
    } else {
        res.sendStatus(403);
    }


});

router.post('/add', (req, res) => {
    const list = req.body;

    console.log('addInstruction:',req.body);

    const addInstruction = `INSERT INTO "instruction" ("step_num", "text","recipe_id")
    VALUES ($1,$2,$3)
    RETURNING "recipe_id";`;

    pool.query (addInstruction, [list.step_num, list.text, list.recipe_id])
    .then(result => {
        console.log ('instruction result:', result.rows);
        res.send(result.rows);
    }).catch (err => {
        console.log('ERROR: ADD router:', err);
        res.sendStatus(500)
    })

})

router.put('/edit/:id', (req, res) => {
    const id = req.params.id;
    const list = req.body;

    console.log('intruction put load is:', req.body);

    const query = `UPDATE "instruction" SET 
    "step_num" = $1, "text" = $2 WHERE "id" = $3;`;

    pool.query(query, [list.step, list.text, id])
        .then(result => {
            console.log('intruction PUT:', result);
            res.send(result.rows);
        })
        .catch(err => {
            console.log('ERROR: PUT instruction router', err);
            res.sendStatus(500)
        })


})

router.delete('/delete/:id', (req, res) => {
    if (req.isAuthenticated()) {
        const id = req.params.id;

        const query = `DELETE FROM "instruction" WHERE "id" = $1 RETURNING "recipe_id" ;`;
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