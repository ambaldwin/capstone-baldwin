var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var bcrypt = require('bcrypt');

router.post('/', (req, res, next) => {
    knex('users')
        .where('email', req.body.email)
        .then((user) => {
            if (user.length === 0) {
                const hashed_password = bcrypt.hashSync(req.body.password, 12)

                const newUser = {
                    name: req.body.name,
                    username: req.body.username,
                    email: req.body.email,
                    hash: hashed_password,
                    phone: req.body.phone,
                    image: req.body.image
                }

                knex('users')
                    .insert(newUser, '*')
                    .then((insertedUser) => {
                        res.json(insertedUser)
                    })
            } else {
                const error = {
                    message: 'Already a user, please log in!'
                }
                res.json([error])
            }
        })
})

module.exports = router;
