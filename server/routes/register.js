var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var bcrypt = require('bcrypt');

router.post('/', (req, res, next) => {
    knex('restaurants')
        .where('username', req.body.username)
        .first()
        .then((restaurant) => {
            if (restaurant) {
                var passwordMatch = bcrypt.compareSync(req.body.password, restaurant.hash)
                if (passwordMatch == true) {
                    res.json(restaurant)
                }
            } else {
                let error = {
                    message: 'Incorrect username or password, please try again.'
                }
                res.json(error)
            }
        })
});




module.exports = router;
