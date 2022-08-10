const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/detail/:id', (req, res) => {
    if (req.isAuthenticated()) {
        const id = req.params.id;

        const query = `SELECT * FROM "instruction" WHERE "recipe_id" = $1;`;
        pool.query(query, [id])
            .then(result => {
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

router.put('/edit/:id', (req, res) => {
    const id = req.params.id;
    const list = req.body.newList;

    console.log('intruction put load is:', req.body.newList);

    const query = `UPDATE "instruction" SET 
    "step_num" = $1, "text" = $2 WHERE "id" = $3;`;

    pool.query(query, [list.number, list.step, id])
        .then(result => {
            console.log('intruction PUT:', result);
            res.send(result.rows);
        })
        .catch(err => {
            console.log('ERROR: PUT instruction router', err);
            res.sendStatus(500)
        })


})



module.exports = router;