app.controller('MainController', function($scope, $routeParams, $location, $cookies, mainService) {

    $scope.view = {};

    mainService.meals().then(function(returnedMeals) {
        $scope.view.mealsArray = returnedMeals.data
    })

    $scope.updateMeal = function(meal) {
      let cookie = $cookies.getObject('loggedin')
      let id = cookie.id

      let updatedMeal = {
        id: meal.id,
        restaurant_id: meal.restaurant_id,
        name: meal.mealName,
        details: meal.details,
        dietary: meal.dietary,
        pickup: meal.pickup,
        price: meal.price,
        user_id: id
      }

        mainService.update(updatedMeal).then(function(returnedMeals) {
          console.log(returnedMeals);
        })
    }

    //shopping cart info below
    $scope.totalCost = 0;
    $scope.totalTax = 0;
    $scope.shoppingCart = [];

    var taxRate = .18;

    $scope.addItem = function(meal) {
        $scope.shoppingCart.push(meal);
        updatePrice();
    }

    function updatePrice() {
        var sum = 0;
        var taxSum = 0

        for (var i = 0; i < $scope.shoppingCart.length; i++) {
            sum += Number($scope.shoppingCart[i].price);
            taxSum += ($scope.shoppingCart[i].price * taxRate)
        }
        $scope.totalTax = taxSum
        $scope.totalCost = sum + taxSum;
    }

});
