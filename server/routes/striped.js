var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

var stripe = require('stripe')("sk_test_81b58ufCwXZuIjDQ7LUiu7kX");

router.get('/:id', (req, res, next) => {

  console.log('in the stripe route');
  console.log('req.params:', req.params);
    var token = req.params.id;

    // Create a charge: this will charge the user's card
    var charge = stripe.charges.create({
        amount: 471, // Amount in cents
        currency: "usd",
        source: token,
        description: "Leftover Love meal"
    }, function(err, charge) {
        if (err && err.type === 'StripeCardError') {
            // The card has been declined
        }
    });

    console.log('charge:', charge);


})


module.exports = router;
