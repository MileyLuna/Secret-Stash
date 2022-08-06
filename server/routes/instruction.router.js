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

/**
 * POST route template
 */
router.post('/', (req, res) => {
    // POST route code here
});



module.exports = router;