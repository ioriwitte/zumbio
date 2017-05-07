'use strict';

/**
 * @ngdoc overview
 * @name hl2304App
 * @description
 * # hl2304App
 *
 * Main module of the application.
 */
angular
  .module('hl2304App', ['ngRoute','ui.bootstrap','ui.grid'])


.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}])
  
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
      })
      .when('/product', {
        templateUrl: 'views/product.html',
        controller: 'ProductCtrl',
        controllerAs: 'product',
      })
      .when('/team', {
        templateUrl: 'views/team.html',
        controller: 'TeamCtrl',
        controllerAs: 'team'
      })
      .when('/registration', {
        templateUrl: 'views/registration.html',
        controller: 'RegistrationCtrl',
        controllerAs: 'registration'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
