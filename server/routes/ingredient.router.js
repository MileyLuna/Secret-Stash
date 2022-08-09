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
    const query = `UPDATE "recipe" set "title" = $1 WHERE "id" = $2;`;

    pool.query(query, [req.body.title, id])
    .then(result => {
        res.send(result.rows);
    })
    .catch(err => {
        console.log('ERROR: delete selected recipe', err);
        res.sendStatus(500)
    })


})



module.exports = router;