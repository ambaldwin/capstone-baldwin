app.service('mainService', function ($http) {
  return {
    meals: function() {
      return $http.get('./index');
    },
    getId: function(id) {
      return $http.get(`/index/${id}`)
    },
    update: function(meal) {
      console.log('meal in service:', meal);
      console.log('in the update service');
      return $http.put('./index', meal)
    }
  }
})
