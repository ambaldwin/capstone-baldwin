app.controller('StripeController', function($scope, $location, $cookies, stripe, stripeService) {


  $scope.submitCard = function(card) {

        stripe.card.createToken(card.currentTarget)
        .then((results) => {
          var token = results.id

          console.log('results:', results);

          stripeService.sendToken(token).then(function() {
          })

        })
  }

})
