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

router.put('/', function(req, res, next) {
  console.log('in the editing meal route');
  console.log('req.body:', req.body)
  console.log('req.params:', req.params);
  // let editedMeal = {
  //     title: req.body.title,
  //     image: req.body.image,
  //     description: req.body.description,
  //   }
      // knex('posts').where('posts.id', req.body.postId).first()
      //     .update(editedCity, '*')
      //     .then(function(city) {
      //         res.json('city/post updated')
      //   })

})


module.exports = router;
