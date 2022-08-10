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


//GET user recipe information
router.get('/user', (req, res) => {

    if (req.isAuthenticated()) {
        // console.log('user is:', req.user);
        const query = `SELECT * FROM "recipe" WHERE "user_id" = $1;`;

        pool.query(query, [req.user.id])
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


router.put('/edit/:id', (req,res) => {
    const id = req.params.id;
    const title = req.body;
    const query = `UPDATE "recipe" set "title" = $1 WHERE "id" = $2;`;
    console.log('recipe put load is:', req.body);

    pool.query(query, [title.title, id])
    .then(result => {
        console.log('recipe PUT:', result);
        res.send(result.rows);
    })
    .catch(err => {
        console.log('ERROR: update selected recipe', err);
        res.sendStatus(500)
    })


})

//delete everything related to recipe id
router.delete('/delete/:id', (req, res) => {
    if (req.isAuthenticated()) {
        const id = req.params.id;

        const query = `DELETE FROM "recipe" WHERE "id" = $1;`;
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