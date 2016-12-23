var app = angular.module('capstoneApp', ['ngRoute', 'ngCookies'])

// app.config(['$resourceProvider', function($resourceProvider) {
//   $resourceProvider.defaults.stripTrailingSlashes = false;
// }]);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../views/main.html',
            controller: 'MainController'
        })
        .when('/register', {
            templateUrl: '../views/register.html',
            controller: 'RegisterController'
        })
        .when('/restaurant/:id', {
            templateUrl: '../views/restaurant.html',
            controller: 'RestaurantController'
        })
        // .when('/profile/:id', {
        //     templateUrl: '../views/profile.html',
        //     controller: 'ProfileController'
        // })
})
