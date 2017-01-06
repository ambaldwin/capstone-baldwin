app.service('stripeService', function ($http) {
  return {
    sendToken: function(token) {
      console.log('service');
      return $http.get(`./striped/${token}`);
    }
  }
})
