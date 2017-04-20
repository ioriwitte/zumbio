'use strict';

/**
 * @ngdoc overview
 * @name hl2App
 * @description
 * # hl2App
 *
 * Main module of the application.
 */
angular.module('hlApp', ['ngRoute','ui.bootstrap','ui.grid','ngAnimate'])

.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}])

.config(function ($routeProvider) {

  $routeProvider
 .when('/', {
   templateUrl: 'app/views/main.html',
   controller: 'MainCtrl'
   })
  .when('/subscribers', {
    templateUrl: 'app/views/subscribers.html',
    controller: 'SubscribersCtrl',
    controllerAs: 'subscribers'
  })
  .when('/team', {
    templateUrl: 'app/views/team.html',
    controller: 'TeamCtrl',
    controllerAs: 'team'
  })
  .when('/product', {
    templateUrl: 'app/views/product.html',
    controller: 'ProductCtrl',
    controllerAs: 'product'
  })
  .otherwise({
redirectTo: '/'
});
  
});
