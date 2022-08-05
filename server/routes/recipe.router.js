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
    }else {
        res.sendStatus(403);
    }

});


//GET selected recipe information
router.get('/detail/:id', (req, res) => {
    if (req.isAuthenticated()) {
    const id = req.params.id;

    const query = `SELECT * FROM "recipe" WHERE "id" = $1;`;
    pool.query(query,[id])
        .then(result => {
            res.send(result.rows);
        })
        .catch(err => {
            console.log('ERROR: Get selected recipe', err);
            res.sendStatus(500)
        })
    }else {
        res.sendStatus(403);
    }


});

const {rejectUnauthenticated} = require('../modules/authentication-middleware');

//GET user recipe information
router.get('/user', rejectUnauthenticated, (req, res) => {

    if (req.isAuthenticated()) {
    
    const query = `SELECT * FROM "recipe" WHERE "user_id" = ${req.user.user_id};`;
    
    pool.query(query)
        .then(result => {
            res.send(result.rows);
        })
        .catch(err => {
            console.log('ERROR: Get selected recipe', err);
            res.sendStatus(500)
        })
    }else {
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
    .catch((err) => {
        console.log('ERROR in POST SERVER:', err);
        res.sendStatus(500);
    })
});

module.exports = router;