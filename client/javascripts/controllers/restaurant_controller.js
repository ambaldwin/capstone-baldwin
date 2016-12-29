app.controller('RestaurantController', function($scope, $route, $cookies, mainService, editService) {

    let cookie = $cookies.getObject('loggedin')
    let id = cookie.id

    $scope.restaurant = cookie

    $scope.view = {};

    mainService.getId(id).then(function(returnedMeals) {
        $scope.view.mealsArray = returnedMeals.data
        $scope.pounds = returnedMeals.data[0].pounds
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

    //restaurant can delete a meal individually before it's ordered
    $scope.deleteMeal = function(meal) {
        editService.delete(meal).then(function() {})
        $route.reload();
    }

    //funcion that is called to add pounds to restaurant in database
    function addPounds(restaurant) {
      restaurant.pounds += 2
      mainService.pounds(restaurant).then(function() {})
      $route.reload();
    }

    //marking a meal ready
    $scope.markReady = function(restaurant) {

        //function to delete meal from database
        $scope.deleteMeal = function(meal) {
            editService.delete(meal).then(function() {})
            $route.reload();
        }

        //function to increment lbs for restaurant
        addPounds(restaurant)

        //send text message to user, twillio stuff
    }


})
