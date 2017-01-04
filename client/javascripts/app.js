var app = angular.module('capstoneApp', ['ngRoute', 'ngCookies', 'angular-stripe'])

app.config(function ($routeProvider, stripeProvider) {
  stripeProvider.setPublishableKey('pk_test_wPXGgL5xnqlSQ0j6QAksPPww');
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
})

// app.config(function (stripeProvider) {
//     stripeProvider.setPublishableKey('sk_test_81b58ufCwXZuIjDQ7LUiu7kX');
//   });
