app.controller('RegisterController', function($scope, $location, $cookies, registerService) {

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
        registerService.loginRestaurant(returningUser).then(function(loggedinUser) {
            let restaurant = loggedinUser.data
            if (!restaurant.message) {
                $cookies.putObject('loggedin', restaurant)
                var id = restaurant.id
                $scope.returningUser = {}
                $scope.logIn.$setPristine()
                $location.url(`/restaurant/${id}`)
            } else {
                $scope.error = restaurant.message
            }
        })
    }

    $scope.submitSignUp = function(newRestaurant, form) {
        registerService.signupRestaurant(newRestaurant).then(function(returnedRestaurant) {
            let restaurant = returnedRestaurant.data
            if (!restaurant.message) {
                $cookies.putObject('loggedin', restaurant)
                var id = restaurant.id
                $scope.newUser = {}
                $scope.signUp.$setPristine()
                $location.url(`/restaurant/${id}`)
            } else {
                $scope.error = restaurant.message
            }
        })
    }

    // user login and signup
    $scope.submitUserLog = function(returningUser) {
        registerService.loginUser(returningUser).then(function(loggedinUser) {
          let user = loggedinUser.data
            if (!user.message) {
                $cookies.putObject('loggedin', user)
                var id = user.id
                $scope.returningUser = {}
                $scope.userLogIn.$setPristine()
                $location.url('/')
            } else {
                $scope.error = user.message
            }
        })
    }

    $scope.submitUserSignUp = function(newUser, form) {
        registerService.signupUser(newUser).then(function(returnedUser) {
            let user = returnedUser.data
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
