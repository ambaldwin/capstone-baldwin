var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

var accountSid = 'AC024051c7a1b0c09f7ffb933f8e9d8ca9';
var authToken = 'bf8de07ed1c68fb62c96e5beea2d13e4';

//require the Twilio module
var client = require('twilio')(accountSid, authToken);

router.post('/', (req, res, next) => {
  knex('users')
      .where('users.id', req.body.user_id)
      .then((user) => {
        let phone = (user[0].phone).toString();
        let countryCode = "+1"
        let finalPhone = countryCode.concat(phone)

        client.messages.create({
            to: finalPhone,
            from: "+13083650826",
            body: "Your meal purchased through LEFTOVER LOVE is ready for pickup!",
        }, function(err, message) {
            console.log(message.sid);
        });
      })

      res.json('Text message alert sent to buyer.')

})


module.exports = router;
