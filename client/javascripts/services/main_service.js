app.service('mainService', function ($http) {
  return {
    meals: function() {
      return $http.get('./index');
    },
    getId: function(id) {
      return $http.get(`/index/${id}`)
    }
  }
})
