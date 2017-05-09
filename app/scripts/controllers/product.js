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
content:"One target scenario for Zumbio! are abandoned mines that pose significant threats to society. Tens of thousands, even hundreds, exist today only in the US. A large fraction lacks accurate maps which leads to near-fatal accidents (including subsidence, ground water contamination). Existing accurate mine maps are usually just idealized 2-D drawings, critical measures (e.g., volume and structural soundness) cannot be inferred from these sketches. Accurate volumetric maps (i.e., knowing the location, its volume, and condition) are of great commercial interest, and informative in planning and performing interventions. People cannot access abandoned mines due to lack of structural soundness, harshness of the environment (low oxygen levels, flooding), and danger of exploding methane. Mapping is challenging: the vehicle must be rugged enough to survive harsh environmental conditions inside the mine and be able to perceive and negotiate major obstacles - without wireless communication techniques. Zumbio! offers an alternative to current approaches such as the Groundhog robot (Thrun et al. (2003)), a 1.500 pound custom-built vehicle, equipped with onboard computing, laser range sensing, gas and sinkage sensors, and video recording equipment.",
url:"images/ghsystemarchitecture.png"}, 

{ title:"Real-time information retrieval and data visualization",
content:"Sugar besides being bad for diabetes, it also causes overweight and obesity problems. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus quam leo, id tristique sapien viverra eu. Maecenas ipsum lectus, suscipit auctor tristique in.",
url:"images/carousel4.jpg"}, 

{ title:"Operator control and interactivity of visualized information",
content:"Sugar besides being bad for diabetes, it also causes overweight and obesity problems.Lorem ipsum dolor sit amet, consectetur adipiscingelit. Vivamus rhoncus quam leo, id tristique sapien viverra eu. Maecenas ipsum lectus, suscipit auctor tristique in, venenatis ut nisl. Quisque eget bibendum libero. Nam nec mi augue.",
url:"images/carousel4.jpg"}
];

});


