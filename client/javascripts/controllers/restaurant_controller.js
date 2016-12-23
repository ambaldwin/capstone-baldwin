app.controller('RestaurantController', function($scope, $routeParams, $location, $cookies, mainService) {

    let cookie = $cookies.getObject('loggedin')
    let id = cookie.id

    $scope.restaurant = cookie

    $scope.view = {};

    mainService.getId(id).then(function(returnedMeals) {
        $scope.view.mealsArray = returnedMeals.data
    })


})
