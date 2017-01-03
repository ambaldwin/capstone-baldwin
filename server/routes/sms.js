var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

// var TWILIO_ACCOUNT_SID = process.env.ACCOUNTS_ID
// var TWILIO_AUTH_TOKEN = process.env.AUTH_TOKEN

//require the Twilio module
var client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

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
