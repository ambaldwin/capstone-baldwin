var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.get('/', (req, res, next) => {
  knex('restaurants')
    .then((restaurants) => {
      let sum = 0
      for (var i = 0; i < restaurants.length; i++) {
        sum += restaurants[i].pounds
      }
      res.json({restaurants: restaurants, pounds: sum})
    })
})

router.put('/:id', (req, res, next) => {
    let editedMeal = {
        user_id: null,
        name: req.body.mealName,
        details: req.body.details,
        dietary: req.body.dietary,
        pickup: req.body.pickup,
        price: req.body.price
    }

    knex('meals').where('id', req.body.id).first()
        .update(editedMeal)
        .then((meal) => {
            res.json('meal updated')
        })
})

router.delete('/:id', (req, res, next) => {
   knex('meals')
       .where('meals.id', req.params.id).delete()
       .then(() => {
           res.json('post deleted')
       })
})


module.exports = router;
