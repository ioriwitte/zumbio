'use strict';

/**
 * @ngdoc function
 * @name hlApp.controller:TeamCtrl
 * @description
 * # TeamCtrl
 * Controller of the hlApp
 */
angular.module('hlApp')
  .controller('TeamCtrl', function ($scope) {
 
var pictures =$scope.pictures=[];
var baseURL="http://lorempixel.com/300/180/business/";
var titles=["Ibrahim Hassan","Jaisal Ashraf","Jori Witte",
"Ahmed Abdelgawad","Farbod Haselzadeh","Zhuoming Zhang"];
var keywords=["ibrahim", "jaisal","jori","ahmed","farbod","zhuoming"];
var dummyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed erat turpis. Integer eget elit. Sed sed erat turpis. Integer eget consectetur quam. Sed at quam ut dolor varius condimentum et sit amet odio.";


$scope.addPics=function(i){
pictures.push({
url:baseURL+keywords[i],
title:titles[i],
summary:dummyText
});
};

for (var i=0;i<5;i++){
$scope.addPics(i);
}

$scope.rate = 0;
$scope.max = 10;
$scope.isReadonly = false;

});

