var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.put('/', (req, res, next) => {
  console.log('in the stripe route');
  console.log('req.body:', req.body);
  // let updatedMeal = req.body
  //     knex('meals').where('meals.id', req.body.id).first()
  //         .update(updatedMeal, '*')
  //         .then((meal) => {
  //             res.json('meal updated with user_id')
  //       })

})

module.exports = router;
