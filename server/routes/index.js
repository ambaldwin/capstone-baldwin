var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.get('/', (req, res, next) => {
  console.log('in the get all the meals route');
    knex('meals').then((meals) => {
      console.log(meals);
            res.json(meals)
        })
})

module.exports = router;
