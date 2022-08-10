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

router.put('/edit/:id', (req,res) => {
    const id = req.params.id;
    const item = req.body.newItem;

    console.log('ingredient put load is:', req.body.newItem);

    const query = `UPDATE "ingredient" 
    SET "amount" = $1,
    "unit" = $2,
    "ingredient" = $3
    WHERE "id" = $4;`;

    pool.query(query, [item.amount, item.unit, item.ingredient, id])
    .then(result => {
        console.log('ingredient PUT:', result);
        res.send(result.rows);
    })
    .catch(err => {
        console.log('ERROR: PUT ingredient router', err);
        res.sendStatus(500)
    })


})



module.exports = router;