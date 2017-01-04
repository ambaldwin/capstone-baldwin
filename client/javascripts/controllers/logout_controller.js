app.controller('LogoutController', function($scope, $cookies) {

  $cookies.remove('loggedIn')

});
