app.controller('MainController', function($scope, $routeParams, $location, $cookies, mainService) {

    $scope.message = 'message'

    $scope.view = {};

    mainService.getAll.get({}, function(returnedMeals) {
      console.log('returnedMeals in controller:', returnedMeals);
        // $scope.view.citiesArray = city.data
    })

});
