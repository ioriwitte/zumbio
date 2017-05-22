angular.module('hlApp', ['ngRoute','ui.bootstrap','ui.grid','ngAnimate'])

.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}])

.config(function ($routeProvider) {

  $routeProvider
 .when('/', {
   templateUrl: 'views/main.html',
   controller: 'MainCtrl'
   })
  .when('/registration', {
    templateUrl: 'views/registration.html',
    controller: 'RegistrationCtrl',
    controllerAs: 'registration'
  })
  .when('/team', {
    templateUrl: 'views/team.html',
    controller: 'TeamCtrl',
    controllerAs: 'team'
  })
  .when('/product', {
    templateUrl: 'views/product.html',
    controller: 'ProductCtrl',
    controllerAs: 'product'
  })
   .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl',
        controllerAs: 'signup'
  })
  .otherwise({
redirectTo: '/'
});
  
});
