app.service('registerService', function ($http) {
  return {
    loginRestaurant: function(returningUser) {
      return $http.post('./register', returningUser);
    },
    signupRestaurant: function(newRestaurant) {
      return $http.post('./signup', newRestaurant)
    },
    loginUser: function(returningUser) {
      return $http.post('./registeruser', returningUser);
    },
    signupUser: function(newUser) {
         return $http.post('./signupuser', newUser);
       }
    }
})
