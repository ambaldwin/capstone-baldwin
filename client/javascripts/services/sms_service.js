app.service('smsService', function ($http) {
  return {
    sms: function(meal) {
      console.log('in the sms service');
      return $http.post('./sms', meal);
    }
  }
})
