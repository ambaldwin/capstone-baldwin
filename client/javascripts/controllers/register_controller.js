app.controller('RegisterController', function($scope, $routeParams, $location, $cookies, registerService) {

    $scope.clearForm = function() {
        $scope.newUser = {}
        $scope.returningUser = {};
        $scope.signUp.$setPristine()
        $scope.logIn.$setPristine()
        $scope.userLogIn.$setPristine()
        $scope.userSignUp.$setPristine()
    }

    // restaurant login and signup
    $scope.submitLogIn = function(returningUser) {
        registerService.loginRestaurant.save(returningUser, function(loggedinUser) {
            if (!loggedinUser.message) {
                $cookies.putObject('loggedin', loggedinUser)
                var id = loggedinUser.id
                $scope.returningUser = {}
                $scope.logIn.$setPristine()
                $location.url('/')
            } else {
                $scope.error = loggedinUser.message
            }
        })
    }

    $scope.submitSignUp = function(newRestaurant,form) {
      registerService.signupRestaurant.save(newRestaurant, function(returnedRestaurant) {
        let restaurant = returnedRestaurant[0]
        if (!restaurant.message) {
            $cookies.putObject('loggedin', restaurant)
            $scope.newUser = {}
            $scope.signUp.$setPristine()
            $location.url('/')
        } else {
            $scope.error = restaurant.message
        }
      })
    }

  // user login and signup
  $scope.submitUserLog = function(returningUser) {
      registerService.loginUser.save(returningUser, function(loggedinUser) {
          if (!loggedinUser.message) {
              $cookies.putObject('loggedin', loggedinUser)
              var id = loggedinUser.id
              $scope.returningUser = {}
              $scope.userLogIn.$setPristine()
              $location.url('/')
          } else {
              $scope.error = loggedinUser.message
          }
      })
  }

  $scope.submitUserSignUp = function(newUser,form) {
  registerService.signupUser.save(newUser, function(returnedUser) {
      let user = returnedUser[0]
      if (!user.message) {
          $cookies.putObject('loggedin', user)
          $scope.newUser = {}
          $scope.userSignUp.$setPristine()
          $location.url('/')
      } else {
          $scope.error = user.message
      }
    })
  }


})
