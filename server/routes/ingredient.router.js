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

/**
 * POST route template
 */
// router.post('/', (req, res) => {

//     const item = req.body;

//     const query = `INSERT INTO "ingredient" ("amount","unit", "ingredient")
//     VALUES ($1, $2, $3) WHERE "recipe_id" = $1;`;
//     pool.query(query, [item.amount, item.unit, item.ingredient])
//         .then(result => {
//             res.send(result.rows);
//         })
//         .catch(err => {
//             console.log('ERROR: POST all recipe', err);
//             res.sendStatus(500)
//         })

// });

router.delete('/delete/:id', (req, res) => {
    if (req.isAuthenticated()) {
        const id = req.params.id;

        const query = `DELETE * FROM "ingredient" WHERE "recipe_id" = $1;`;
        pool.query(query, [id])
            .then(result => {
                res.send(result.rows);
            })
            .catch(err => {
                console.log('ERROR: Delete selected recipe', err);
                res.sendStatus(500)
            })
    } else {
        res.sendStatus(403);
    }


});

module.exports = router;