app.service('stripeService', function ($http) {
  return {
    sendToken: function(token) {
      return $http.post('./striped', token);
    }
  }
})
