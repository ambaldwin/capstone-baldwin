app.controller('RestaurantController', function($scope, $routeParams, $location, $cookies, mainService) {

    let cookie = $cookies.getObject('loggedin')
    let id = cookie.id

    $scope.restaurant = cookie

    $scope.view = {};

    mainService.getId.get({id: id}, function(returnedMeals) {
        $scope.view.mealsArray = returnedMeals
        console.log('returnedMeals in restaurant dasbhoard:', returnedMeals);
    })


})
