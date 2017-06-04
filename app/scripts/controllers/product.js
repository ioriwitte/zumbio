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
content:"Our precise localization algorithm is optimized for low-cost 2D LiDAR sensors such as Scanse Sweep (USD 249, 40m outdoors range, 120g weight) or the RP A2 (USD 398, 1m outdoors range, 179g weight) (specs and benchmark to be found in DIYRobocars or IEEE Spectrum). Laser range finders (LiDARs - LIght Detection And Ranging) are widely in mobile robotic systems for obstacle detection and environment mapping. Today's miniature LiDAR systems, as active sensors, provide direct distance and intensity measurements and are compact, light, shadow and robust enough to work in sunlight, dust, rain and other outdoor conditions. The major differences between 2D and 3D LiDARs are as follows: for a 2D LiDAR, each scanning is performed along a plane, with a limited field-of-view (usually less than 180°), whereas a 3D LiDAR contains a large number of scanning planes with a broad field-of-view (up to 360°), resulting in a cloud of 3D readings and containing distance and intensity information within one single scanning period.",
url:"images/tiltrangeroverlaylarge.png"}, 

{ title:"Operator control and interactivity of visualized information",
content:"Tasks typically performed for e.g., geological analysis by a human operator (non-autonomous scenario) such as 2D measurement of linear lengths of a planar and a volumetric feature, using an interaction device for point selection, or the interpretation of features from individual points from a point cloud, highlighted across areas of interest, require high degrees of accuracy. Although a difference in operator performance between 2D and 3D LiDAR point cloud visualization manipulations had not been revealed by human factors research (cp., e.g., Burwell (2016)), accuracy of data interpretation by remote operators can be supported through certain visualization techniques. We are experts in NUI (Natural User Interfaces) and offer optimized interaction techniques to manipulate large amounts of data in an innovative and intuitive way.",
url:"images/scifidatainteraction.png"}
];

});


