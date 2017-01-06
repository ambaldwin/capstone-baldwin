var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

var stripe = require('stripe')("pk_test_wPXGgL5xnqlSQ0j6QAksPPww");

router.post('/', (req, res, next) => {
    var token = req.body.token;
    var amount = req.body.amount
    
    // Create a charge: this will charge the user's card
    var charge = stripe.charges.create({
        amount: amount, // Amount in cents
        currency: "usd",
        source: token,
        description: "Example charge"
    }, function(err, charge) {
        if (err && err.type === 'StripeCardError') {
            // The card has been declined
        }
    });


})


module.exports = router;
