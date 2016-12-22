var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.get('/', (req, res, next) => {
    knex('meals')
      .join('restaurants', 'meals.restaurant_id', 'restaurants.id')
      .select('meals.id', 'meals.restaurant_id', 'meals.name as mealName', 'meals.details', 'meals.dietary', 'meals.pickup', 'meals.price', 'meals.image', 'restaurants.name')
      .then((meals) => {
        res.json(meals)
      })
})

module.exports = router;
