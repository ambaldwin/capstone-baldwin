app.controller('MainController', function($scope, $routeParams, $location, $cookies, mainService) {

    $scope.view = {};

    let cookie = $cookies.getObject('loggedin')
    let id = cookie.id

    mainService.meals.get({}, function(returnedMeals) {
        $scope.view.mealsArray = returnedMeals
    })

    $scope.updateMeal = function(meal) {
      console.log('MEAL:', meal);
      console.log('id:', id);
        // mainService.meals.update(meal, function(returnedMeals) {
        //     console.log('id in the meals update service');
        //     console.log('in the meals update service:', meal);
        //     $scope.view.mealsArray = returnedMeals
        // })
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
