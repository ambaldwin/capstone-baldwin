var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var bcrypt = require('bcrypt');

router.post('/', (req, res, next) => {
    knex('users')
        .where('username', req.body.username)
        .first()
        .then((user) => {
            if (user) {
                var passwordMatch = bcrypt.compareSync(req.body.password, user.hash)
                if (passwordMatch == true) {
                    res.json(user)
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
