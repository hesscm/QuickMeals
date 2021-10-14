const express = require('express');
const pool = require('../modules/pool');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', async (req, res) => {
    // GET route code here
});

/**
 * POST route template
 */
router.post('/',  async (req, res) => {
    // POST route code here
    try {
        await pool.query('BEGIN');
        const queryTest = `WITH json_array AS ( SELECT
         4463899,
        'recipe name',
        'desc',
        'inst',
        'img.path',
        'Monday',
        jsonb_array_elements('[{
			"col1": "a",
            "col2": 1,
            "col3": 1,
            "col4": "one"
                 }]'::jsonb))
        INSERT INTO meals(id, name, description, instructions, day, image_path, ingredients) 
        SELECT * FROM json_array;`;
        const values = []; //FIX ME WHEN READY TO CONNECT THE WIRES FROM CLIENT
        await pool.query(queryTest);
        await pool.query('COMMIT');
        res.sendStatus(201);
    } catch(error) {
        console.log('ROLLBACK', error);
        await pool.query('ROLLBACK');
        throw error;
    }
});

module.exports = router;