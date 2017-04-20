'use strict';

/**
 * @ngdoc function
 * @name hlApp.controller:ArticlesCtrl
 * @description
 * # ArticlesCtrl
 * Controller of the hlApp
 */
angular.module('hlApp')
  .controller('ProductCtrl', function ($scope) {
    $scope.posts = [
{ title:"Recent research on remote obstacle detection",
content:"Almonds contain high amounts of HDL which helps reducecholestrol.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamusrhoncus quam leo, id tristique sapien viverra eu. Maecenas ipsum lectus,suscipit auctor tristique in, venenatis ut nisl. Quisque eget bibendumlibero. Nam nec mi augue."},

{ title:"Real-time information retrieval and data visualization",
content:"Sugar besides being bad for diabetes, it also causes overweight and obesity problems. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus quam leo, id tristique sapien viverra eu. Maecenas ipsum lectus, suscipit auctor tristique in."},

{ title:"Operator control and interactivity of visualized information",
content:"Sugar besides being bad for diabetes, it also causes overweight and obesity problems.Lorem ipsum dolor sit amet, consectetur adipiscingelit. Vivamus rhoncus quam leo, id tristique sapien viverra eu. Maecenas ipsum lectus, suscipit auctor tristique in, venenatis ut nisl. Quisque eget bibendum libero. Nam nec mi augue."
}
];

});

