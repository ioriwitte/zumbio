'use strict';

/**
 * @ngdoc function
 * @name hlApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hlApp
 */

angular.module('hlApp')
  .controller('MainCtrl', function ($scope) {
    var baseURL='http://lorempixel.com/960/450/technics/';
	$scope.setInterval=5000;  

$scope.slides = [
{
	title:'Remote Obstacle Detection',
image:baseURL+'technics/',
text:'Detect objects in inaccessible environments'
},
{
title:'360° Scanning and Sensing',
image:baseURL+'technics/',
text:'Explore without light or GPS!'
},
{
title:'Data Visualization',
image:baseURL+'technics/',
text:'Improve real-time operator insights!'
}
];

// Model for the 3 content blocks
var baseURL='http://lorempixel.com/200/200/abstract/';

$scope.content=[
{
img:baseURL+'abstract',
title:'About Us',
summary:'We are good, we are the best out there regarding LiDARs for industrial drones'
},

{
img:baseURL+'nature',
title:'Our Services',
summary:'We offer significant cost reductions due to faster access to rugged areas, primarily underground mining facilities.'
},

{
img:baseURL+'sports',
title:'Contact Us',
summary:'#111, Good Health Blvd, Happy Place, Antartica, Zip-432167'
}];


});