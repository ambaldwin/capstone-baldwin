app.controller('StripeController', function($scope, $location, $cookies, stripe, stripeService) {

  $scope.submitCard = function(card) {

        stripe.card.createToken(card.currentTarget)
        .then((results) => {
          var token = results.id

          stripeService.update(token).then(function(returnedCustomer) {
            console.log(returnedCustomerr);
          })

        })

  }


})
