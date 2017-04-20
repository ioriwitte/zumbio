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
  .when('/subscribers', {
    templateUrl: 'views/subscribers.html',
    controller: 'SubscribersCtrl',
    controllerAs: 'subscribers'
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
  .otherwise({
redirectTo: '/'
});
  
});
