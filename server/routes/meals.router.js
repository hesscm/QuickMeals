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
router.post('/', async (req, res) => {
    // POST route code here
    console.log('id', req.user.id);
    const meal = req.body[0];
    console.log(meal);
    try {
        await pool.query('BEGIN');
        const queryTest = `WITH json_array AS ( SELECT
        2,
        $1,
        $2,
        $3,
        $4,
        $5,
        jsonb_array_elements($6::jsonb))
        INSERT INTO meals(id, name, description, instructions, day, image_path, ingredients) 
        SELECT * FROM json_array;`;
        const values = [meal.title, meal.description, 'instructions', meal.day, meal.image, meal.ingredients]; //FIX ME WHEN READY TO CONNECT THE WIRES FROM CLIENT
        await pool.query(queryTest, values);
        const junctionQuery = `INSERT INTO user_meals (user_id, meals_id) VALUES(5, 44684);`;
        await pool.query(junctionQuery);
        await pool.query('COMMIT');
        res.sendStatus(201);
    } catch(error) {
        console.log('ROLLBACK', error);
        await pool.query('ROLLBACK');
        throw error;
    }
});

module.exports = router;