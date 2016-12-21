var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.get('/', (req, res, next) => {
  console.log('in the get all the meals controller');
    knex('meals').then((meals) => {
            res.json(meals)
        })
})

module.exports = router;
