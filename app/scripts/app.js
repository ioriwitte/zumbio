angular.module('hlApp', ['ngRoute','ui.bootstrap','ui.grid','ngAnimate'])

.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}])

.config(function ($routeProvider) {

  $routeProvider
 .when('/', {
   templateUrl: 'main.html',
   controller: 'MainCtrl'
   })
  .when('/subscribers', {
    templateUrl: 'subscribers.html',
    controller: 'SubscribersCtrl',
    controllerAs: 'subscribers'
  })
  .when('/team', {
    templateUrl: 'team.html',
    controller: 'TeamCtrl',
    controllerAs: 'team'
  })
  .when('/product', {
    templateUrl: 'product.html',
    controller: 'ProductCtrl',
    controllerAs: 'product'
  })
  .otherwise({
redirectTo: '/'
});
  
});
