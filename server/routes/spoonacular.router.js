const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');
require('dotenv').config();

const router = express.Router();

//get route to for a RANDOM spoonacular search
router.get('/random', (req, res) => {
    axios.get(`https://api.spoonacular.com/recipes/random?number=1&apiKey=${process.env.SPOONACULAR_API_KEY}`)
        .then(response => {
            console.log(response.data);
            res.send(response.data);
        }).catch(error => {
            res.sendStatus(500);
        });
});

//get route to for a specified spoonacular search
router.get('/search', (req, res) => {
    axios.get(`https://api.spoonacular.com/recipes/complexSearch?type=maincourse&sort=random&number=4&fillIngredients=true&addRecipeInformation=true&apiKey=${process.env.SPOONACULAR_API_KEY}`)
        .then(response => {
            console.log(response.data);
            res.send(response.data);
        }).catch(error => {
            res.sendStatus(500);
        });
});

router.post('/totalingredients', (req, res) => {
    let apiObject = { "items": [] };
    const ingredients = req.body;
    for (let i = 0; i < ingredients.length; i++) {
        apiObject.items.push(ingredients[i].fullString);
    }
    console.log(apiObject);
    axios.post(`https://api.spoonacular.com/mealplanner/shopping-list/compute?apiKey=${process.env.SPOONACULAR_API_KEY}`, apiObject)
        .then(response => {
            console.log('response', response.data);
            res.send(response.data);
        }).catch(error => {
            console.log('error', error);
            res.sendStatus(500);
        });
});

module.exports = router;