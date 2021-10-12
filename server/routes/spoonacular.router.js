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
    axios.get(`https://api.spoonacular.com/recipes/complexSearch?type=maincourse&sort=random&number=5&addRecipeInformation=true&apiKey=${process.env.SPOONACULAR_API_KEY}`)
        .then(response => {
            console.log(response.data);
            res.send(response.data);
        }).catch(error => {
            res.sendStatus(500);
        });
});

//https://api.spoonacular.com/recipes/complexSearch?type=maincourse&number=10&addRecipeInformation=true&apiKey=${process.env.SPOONACULAR_API_KEY}

module.exports = router;