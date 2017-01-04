app.controller('StripeController', function($scope, $location, $cookies, stripe, stripeService) {


  $scope.submitCard = function(card) {

        stripe.card.createToken(card.currentTarget)
        .then((results) => {
          var token = results.id
          console.log('token:', token);
          stripeService.update(token).then(function(returnedCustomer) {
          })
        })

  }


})
