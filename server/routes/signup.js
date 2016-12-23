var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var bcrypt = require('bcrypt');

router.post('/', (req, res, next) => {
    knex('restaurants')
        .where('email', req.body.email)
        .then((restaurant) => {
            if (restaurant.length === 0) {
                const hashed_password = bcrypt.hashSync(req.body.password, 12)

                const newUser = {
                    name: req.body.name,
                    username: req.body.username,
                    email: req.body.email,
                    hash: hashed_password,
                    image: req.body.image,
                    address: req.body.address,
                    city: req.body.city,
                    state: req.body.state,
                    zip: req.body.zip
                }

                knex('restaurants')
                    .insert(newUser, '*')
                    .then((insertedRestaurant) => {
                        res.json(insertedRestaurant[0])
                    })
            } else {
                const error = {
                    message: 'Already a user, please log in!'
                }
                res.json(error)
            }
        })
})

module.exports = router;
