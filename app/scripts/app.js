angular.module('hlApp', ['ngRoute','ui.bootstrap','ui.grid','ngAnimate','ngSanitize','youtube-embed'])

.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}])

.config(function ($routeProvider, $sanitize) {

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
    .when('/media', {
    templateUrl: 'views/media.html',
    controller: 'MediaCtrl',
     controllerAs: 'media'
  })
  .otherwise({
redirectTo: '/'
});
  
});
