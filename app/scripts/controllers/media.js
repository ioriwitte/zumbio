'use strict';

/**
 * @ngdoc function
 * @name hl2304App.controller:MediaCtrl
 * @description
 * # MediaCtrl
 * Controller of the hl2304App
 */




angular.module('hlApp')

.controller('MediaCtrl', function ($scope) {
  // 'VvTvtIeXJ1I'
  //console.log(youtubeEmbedUtils.getIdFromURL('https://www.youtube.com/watch?v=suG-c_i2fBQ'));
//}
  

  $scope.playerVars = {
    controls: 0,
    autoplay: 1
 };


  $scope.anotherGoodOne = 'https://www.youtube.com/watch?v=E1ciy4dzpVc';
});

