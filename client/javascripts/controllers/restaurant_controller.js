app.controller('RestaurantController', function($scope, $routeParams, $location, $cookies, mainService) {

    let cookie = $cookies.getObject('loggedin')
    let id = cookie.id

    $scope.restaurant = cookie

    $scope.view = {};

    mainService.getId(id).then(function(returnedMeals) {
        $scope.view.mealsArray = returnedMeals.data
    })

    //restaurant can add new meal
    $scope.clearForm = function() {
        $scope.addedMeal.$setPristine()
    }

    $scope.addMeal = function(meal) {
        let newMeal = {
            restaurant_id: id,
            user_id: null,
            name: meal.name,
            details: meal.details,
            dietary: meal.dietary,
            pickup: meal.pickup,
            image: meal.image,
            price: meal.price
        }

        mainService.new(newMeal).then(function(results) {
            console.log('results back after route:', results);
            // $scope.view.mealsArray.push(results.data[0]);
            // $scope.meal = {}
            // $scope.addedMeal.$setPristine()
        })
    }


})
