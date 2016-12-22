app.controller('MainController', function($scope, $routeParams, $location, $cookies, mainService) {

    $scope.message = 'message'

    $scope.view = {};

    mainService.meals.get({}, function(returnedMeals) {
        $scope.view.mealsArray = returnedMeals
    })

});
