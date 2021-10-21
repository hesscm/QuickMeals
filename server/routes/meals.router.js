const express = require('express');
const pool = require('../modules/pool');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const router = express.Router();

//async/await comments for ALL routes:
    //async: establish the function
    //await: do not perform the next task until this has a valid response
    //BEGIN: try to send to the database
    //COMMIT: if no errors, send a response
    //ROLLBACK: if error, do not add anything to the database and send errors.

//get all of the current user's meals for the 'View Meal Plan' page
router.get('/', rejectUnauthenticated, async (req, res) => {
    try {
        await pool.query('BEGIN');
        const queryText = ` SELECT DISTINCT ON (api_id) meals.*,user_meals.day,user_meals.is_saved FROM meals
                            JOIN "user_meals" ON meals.id = user_meals.meals_id
                            JOIN "user" ON "user".id = user_meals.user_id
                            WHERE "user".id = $1;`
        const result = await pool.query(queryText, [req.user.id]);
        await pool.query('COMMIT');
        res.send(result.rows);

    } catch (error) {
        console.log('ROLLBACK', error);
        await pool.query('ROLLBACK');
        throw error;
    }
});

//get all of the users's saved meals
router.get('/savedmeals', rejectUnauthenticated, async (req, res) => {
    try {
        await pool.query('BEGIN');
        const queryText = ` SELECT DISTINCT ON (api_id) meals.*, user_saved_meals.date FROM meals
                            JOIN "user_saved_meals" ON meals.id = user_saved_meals.meals_id
                            JOIN "user" ON "user".id = user_saved_meals.user_id
                            WHERE "user".id = $1;`
        const result = await pool.query(queryText, [req.user.id]);
        await pool.query('COMMIT');
        res.send(result.rows);
    } catch (error) {
        console.log('ROLLBACK', error);
        await pool.query('ROLLBACK');
        throw error;
    }
});

//a user wants to add an array of meals to their meal plan. add it to the database.
router.post('/', rejectUnauthenticated, async (req, res) => {
    const meal = req.body;

    try {
        await pool.query('BEGIN');

        //loop through the list of meals, sending to database one at a time
        for (let i = 0; i < meal.length; i++) {

            //a user is not required to add a meal to every day of the week.
            //if there is no meal, add nothing to the database
            if (meal[i].title == '') {
                console.log('Nothing to input at element ' + i);
            } else {
                //add all of the meal data to the meals table, return the ID
                const queryTest = `
                INSERT INTO meals (api_id, name, description, instructions, image_path, ingredients, ingredients_string)
                VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING "id";`;
                const values = [meal[i].id, meal[i].title, meal[i].description, meal[i].instructions, meal[i].image, JSON.stringify(meal[i].ingredients), meal[i].ingredientsString]; //FIX ME WHEN READY TO CONNECT THE WIRES FROM CLIENT
                const mealsResult = await pool.query(queryTest, values);
                const mealsID = mealsResult.rows[0].id;
                console.log(mealsID);
                //add the new meal and user id to the user_meals table
                const junctionQuery = `INSERT INTO user_meals (user_id, meals_id, day) VALUES($1, $2, $3);`;
                junctionValues = [req.user.id, mealsID, meal[i].day];
                await pool.query(junctionQuery, junctionValues);
            }
        } //end loop

        await pool.query('COMMIT');
        res.sendStatus(201);
    } catch (error) {
        console.log('ROLLBACK', error);
        await pool.query('ROLLBACK');
        throw error;
    }
});

//a user chose to save a meal. Add that meal to the user_saved_meals table
router.post('/save', rejectUnauthenticated, async (req, res) => {
    try {
        console.log(req.body);
        await pool.query('BEGIN');
        const queryText = `INSERT INTO user_saved_meals (user_id, meals_id) VALUES($1, $2);`;
        await pool.query(queryText, [req.user.id, req.body.id]);
        await pool.query('COMMIT');
        res.sendStatus(201);

    } catch (error) {
        console.log('ROLLBACK', error);
        await pool.query('ROLLBACK');
        throw error;
    }
});


//a user can save a meal on multiple pages 
//this updates the column in the user_meals table so the user can know if he already saved this meal or not
router.put('/:id/:saved', rejectUnauthenticated, async (req, res) => {
    try {
        await pool.query('BEGIN');
        const queryText = `UPDATE "user_meals" SET "is_saved" = $3 WHERE "user_id" = $1 AND "meals_id" = $2;`
        await pool.query(queryText, [req.user.id, req.params.id, req.params.saved]);
        await pool.query('COMMIT');
        res.sendStatus(200);

    } catch (error) {
        console.log('ROLLBACK', error);
        await pool.query('ROLLBACK');
        throw error;
    }
});

//a user can remove a meal from their meal plan on the 'View Meal Plan' page.
//use the sent id and remove that meal from the user_meals table
router.delete('/:id', rejectUnauthenticated, async (req, res) => {
    try {
        console.log(req.params.id);
        await pool.query('BEGIN');
        const queryText = `DELETE FROM "user_meals" WHERE "user_id" = $1 AND "meals_id" = $2;`
        await pool.query(queryText, [req.user.id, req.params.id]);
        await pool.query('COMMIT');
        res.sendStatus(200);

    } catch (error) {
        console.log('ROLLBACK', error);
        await pool.query('ROLLBACK');
        throw error;
    }
});

//a user can remove a saved meal from their saved meals list
router.delete('/savedmeals/:id', rejectUnauthenticated, async (req, res) => {
    try {
        await pool.query('BEGIN');
        //remove the meal from the saved_meals table
        const queryTextSavedMeals = `DELETE FROM "user_saved_meals" WHERE "user_id" = $1 AND "meals_id" = $2;`
        await pool.query(queryTextSavedMeals, [req.user.id, req.params.id]);
        //update the user_meals table 'is_saved' column so our FAVORITE/UNFAVORITE buttons are shown accurately
        const queryTextMeals = `UPDATE "user_meals" SET "is_saved" = $3 WHERE "user_id" = $1 AND "meals_id" = $2;`
        await pool.query(queryTextMeals, [req.user.id, req.params.id, 'false']);
        await pool.query('COMMIT');
        res.sendStatus(200);

    } catch (error) {
        console.log('ROLLBACK', error);
        await pool.query('ROLLBACK');
        throw error;
    }
});

module.exports = router;