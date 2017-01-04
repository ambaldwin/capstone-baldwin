app.service('stripeService', function ($http) {
  return {
    update: function(token) {
      console.log('in the stripe service');
      return $http.put('./stripe', token)
    }
  }
})
