app.controller('RestaurantController', function($scope, $route, $cookies, mainService, editService) {

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
            $scope.view.mealsArray.push(results.data[0]);
            $scope.meal = {}
            $scope.addedMeal.$setPristine()
        })
    }

    //restaurant can edit a meal
    $scope.submitEditMeal = function(meal) {
        editService.edit(meal).then(function() {})
    }

    //restaurant can delete a meal
    $scope.deleteMeal = function(meal) {
        editService.delete(meal).then(function() {})
        $route.reload();
    }

    //marking a meal ready
    $scope.markReady = function() {
        console.log('in the mark ready function');

        //function to delete from database
    }


})
