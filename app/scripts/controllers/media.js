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


  $scope.anotherGoodOne = 'https://youtu.be/yFZAqp4R5Rg';
  $scope.anotherGoodTwo = 'https://youtu.be/Z0QMCQ6LeII';
  $scope.anotherGoodThree = 'https://youtu.be/stkMrNXi_As';

  
});

