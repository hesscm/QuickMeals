const express = require('express');
const pool = require('../modules/pool');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const router = express.Router();

router.get('/', rejectUnauthenticated, async (req, res) => {
    // GET route code here
    try {
        await pool.query('BEGIN');
        const queryText = ` SELECT DISTINCT ON (api_id) meals.*,user_meals.day,user_meals.is_saved FROM meals
                            JOIN "user_meals" ON meals.id = user_meals.meals_id
                            JOIN "user" ON "user".id = user_meals.user_id
                            WHERE "user".id = $1;`
        const result = await pool.query(queryText, [req.user.id]);
        await pool.query('COMMIT');
        console.log(result.rows);
        res.send(result.rows);

    } catch (error) {
        console.log('ROLLBACK', error);
        await pool.query('ROLLBACK');
        throw error;
    }
});

router.get('/savedmeals', rejectUnauthenticated, async (req, res) => {
    // GET route code here
    try {
        await pool.query('BEGIN');
        const queryText = ` SELECT DISTINCT ON (api_id) meals.*, user_saved_meals.date FROM meals
                            JOIN "user_saved_meals" ON meals.id = user_saved_meals.meals_id
                            JOIN "user" ON "user".id = user_saved_meals.user_id
                            WHERE "user".id = $1;`
        const result = await pool.query(queryText, [req.user.id]);
        await pool.query('COMMIT');
        console.log(result.rows);
        res.send(result.rows);
    } catch (error) {
        console.log('ROLLBACK', error);
        await pool.query('ROLLBACK');
        throw error;
    }
});

router.put('/:id', rejectUnauthenticated, async (req, res) => {
    try {
        console.log(req.params.id);
        await pool.query('BEGIN');
        const queryText = `UPDATE "user_meals" WHERE "user_id" = $1 AND "meals_id" = $2;`
        const result = await pool.query(queryText, [req.user.id, req.params.id]);
        await pool.query('COMMIT');
        console.log(result);
        res.send(200);

    } catch (error) {
        console.log('ROLLBACK', error);
        await pool.query('ROLLBACK');
        throw error;
    }
});

router.delete('/:id', rejectUnauthenticated, async (req, res) => {
    try {
        console.log(req.params.id);
        await pool.query('BEGIN');
        const queryText = `DELETE FROM "user_meals" WHERE "user_id" = $1 AND "meals_id" = $2;`
        const result = await pool.query(queryText, [req.user.id, req.params.id]);
        await pool.query('COMMIT');
        console.log(result);
        res.send(200);

    } catch (error) {
        console.log('ROLLBACK', error);
        await pool.query('ROLLBACK');
        throw error;
    }
});

router.delete('/savedmeals/:id', rejectUnauthenticated, async (req, res) => {
    try {
        console.log(req.params.id);
        await pool.query('BEGIN');
        const queryText = `DELETE FROM "user_saved_meals" WHERE "user_id" = $1 AND "meals_id" = $2;`
        const result = await pool.query(queryText, [req.user.id, req.params.id]);
        await pool.query('COMMIT');
        console.log(result);
        res.send(200);

    } catch (error) {
        console.log('ROLLBACK', error);
        await pool.query('ROLLBACK');
        throw error;
    }
});

router.post('/save', rejectUnauthenticated, async (req, res) => {
    // GET route code here
    try {
        console.log(req.body);
        await pool.query('BEGIN');
        const queryText = `INSERT INTO user_saved_meals (user_id, meals_id) VALUES($1, $2);`;
        const result = await pool.query(queryText, [req.user.id, req.body.id]);
        await pool.query('COMMIT');
        res.sendStatus(201);

    } catch (error) {
        console.log('ROLLBACK', error);
        await pool.query('ROLLBACK');
        throw error;
    }
});

router.post('/', rejectUnauthenticated, async (req, res) => {
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
                INSERT INTO meals (api_id, name, description, instructions, image_path, ingredients)
                VALUES ($1,$2,$3,$4,$5,$6) RETURNING "id";`;
                const values = [meal[i].id, meal[i].title, meal[i].description, meal[i].instructions, meal[i].image, JSON.stringify(meal[i].ingredients)]; //FIX ME WHEN READY TO CONNECT THE WIRES FROM CLIENT
                const mealsResult = await pool.query(queryTest, values);
                console.log(mealsResult);
                const mealsID = mealsResult.rows[0].id;
                console.log(mealsID);
                const junctionQuery = `INSERT INTO user_meals (user_id, meals_id, day) VALUES($1, $2, $3);`;
                junctionValues = [req.user.id, mealsID, meal[i].day];
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