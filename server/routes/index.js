var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.get('/', (req, res, next) => {
    knex('meals')
      .join('restaurants', 'meals.restaurant_id', 'restaurants.id')
      .select('meals.id', 'meals.restaurant_id', 'meals.name as mealName', 'meals.details', 'meals.dietary', 'meals.pickup', 'meals.price', 'meals.image', 'meals.user_id', 'restaurants.name')
      .then((meals) => {
        res.json(meals)
      })
})

router.get('/:id', (req, res, next) => {
    knex('meals')
      .where('restaurant_id', req.params.id)
      .join('restaurants', 'meals.restaurant_id', 'restaurants.id')
      .select('meals.id', 'meals.restaurant_id', 'meals.name as mealName', 'meals.details', 'meals.dietary', 'meals.pickup', 'meals.price', 'meals.image', 'meals.user_id', 'restaurants.name')
      .then((meals) => {
        res.json(meals)
      })
})

router.put('/', (req, res, next) => {
  let updatedMeal = req.body
      knex('meals').where('meals.id', req.body.id).first()
          .update(updatedMeal, '*')
          .then(function(meal) {
              res.json('meal updated with user_id')
        })

})

router.post('/', (req, res, next) => {
    knex('meals').insert(req.body, '*')
        .then((results) => {
            res.json(results);
        })
});


module.exports = router;
