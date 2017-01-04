app.service('stripeService', function ($http) {
  return {
    update: function(token) {
      console.log('in the stripe service');
      console.log('token in the service:', token);
      return $http.post('./stripe', token)
    }
  }
})
