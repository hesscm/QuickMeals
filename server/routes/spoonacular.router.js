const express = require('express');
const axios = require('axios');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
require('dotenv').config();

const router = express.Router();

//get route for a RANDOM spoonacular search. return only 1
router.get('/random', rejectUnauthenticated, (req, res) => {
    axios.get(`https://api.spoonacular.com/recipes/random?number=1&apiKey=${process.env.SPOONACULAR_API_KEY}`)
        .then(response => {
            console.log(response.data);
            res.send(response.data);
        }).catch(error => {
            res.sendStatus(500);
        });
});

//get route to for a specified spoonacular search
router.get('/search', rejectUnauthenticated, (req, res) => {
    //base parameters: main course, random, limit 4, bring ingredients list, bring recipe info
    axios.get(`https://api.spoonacular.com/recipes/complexSearch?type=maincourse&sort=random&number=4&fillIngredients=true&addRecipeInformation=true&apiKey=${process.env.SPOONACULAR_API_KEY}`)
        .then(response => {
            console.log(response.data);
            res.send(response.data);
        }).catch(error => {
            res.sendStatus(500);
        });
});

//post route to send spoonacular a list of ingredients with duplicates. returns no duplicates.
router.post('/totalingredients', rejectUnauthenticated, (req, res) => {
    const apiObject = { "items": [] };
    const ingredients = req.body;

    //loop to add ingredients to our API friendly object
    for (let i = 0; i < ingredients.length; i++) {
        apiObject.items.push(ingredients[i].fullString);
    }
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