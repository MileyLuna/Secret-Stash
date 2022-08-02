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
            console.log('ERROR: Get user recipe', err);
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
    // POST route code here
});

module.exports = router;