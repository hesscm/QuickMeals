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
    const meal = req.body;
    console.log(meal);
    try {
        await pool.query('BEGIN');
        for (let i = 0; i < meal.length; i++) {
            if (meal[i].title == '') {
                console.log('Nothing to input at element ' + i);
            } else {
                const queryTest = `
                INSERT INTO meals (api_id, name, description, instructions, image_path, day, ingredients)
                VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING "id";`;
                const values = [meal[i].id, meal[i].title, meal[i].description, meal[i].instructions, meal[i].image, meal[i].day, JSON.stringify(meal[i].ingredients)]; //FIX ME WHEN READY TO CONNECT THE WIRES FROM CLIENT
                const mealsResult = await pool.query(queryTest, values);
                console.log(mealsResult);
                const mealsID = mealsResult.rows[0].id;
                console.log(mealsID);
                const junctionQuery = `INSERT INTO user_meals (user_id, meals_id) VALUES($1, $2);`;
                junctionValues = [req.user.id, mealsID];
                await pool.query(junctionQuery, junctionValues);
            }
            
        }

        await pool.query('COMMIT');
        res.sendStatus(201);
    } catch (error) {
        console.log('ROLLBACK', error);
        await pool.query('ROLLBACK');
        throw error;
    }
});

module.exports = router;