const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');
require('dotenv').config();

const router = express.Router();

//get route to for a RANDOM spoonacular search
router.get('/', (req, res) => {
    axios.get(`https://api.spoonacular.com/recipes/random?number=1&apiKey=${process.env.SPOONACULAR_API_KEY}`)
        .then(response => {
            console.log(response.data);
            res.send(response.data);
        }).catch(error => {
            res.sendStatus(500);
        });
});

module.exports = router;