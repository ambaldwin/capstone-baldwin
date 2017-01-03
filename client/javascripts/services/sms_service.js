app.service('smsService', function ($http) {
  return {
    sms: function(meal) {
      return $http.post('./sms', meal);
    }
  }
})
