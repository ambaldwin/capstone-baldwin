app.controller('RegisterController', function($scope, $routeParams, $location, $cookies, capstoneService) {

    $scope.message = 'Are you hungry? Get started below.'

    $scope.clearForm = function() {
        $scope.newUser = {}
        $scope.returningUser = {};
        $scope.signUp.$setPristine()
        $scope.logIn.$setPristine()
    }

    $scope.submitLogIn = function(returningUser) {
        capstoneService.loginRestaurant.save(returningUser, function(loggedinUser) {
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
    capstoneService.signupRestaurant.save(newRestaurant, function(returnedRestaurant) {
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



})
