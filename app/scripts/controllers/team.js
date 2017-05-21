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

var img = [{ url: "images/ibrahim.png" },{ url: "images/jaisal.png" },{ url: "images/jori.png" },
{ url: "images/ahmed.png" },{ url: "images/farbod.png" },{ url: "images/zhuoming.png" }];

var titles=["Ibrahim Hassan","Jaisal Ashraf","Jori Witte","Ahmed Abdelgawad","Farbod Haselzadeh","Zhuoming Zhang"];
//var keywords=["ibrahim", "jaisal","jori","ahmed","farbod","zhuoming"];

var subtitles=["Embedded Systems Engineer, CEO","Embedded Systems Engineer, CTO","Interaction Designer, COO","Embedded Systems Engineer, SSD","Embedded Systems Engineer, SM","User Experience & Interaction Designer, UXM"];


var dummyText=[

"Co founder of a sales agency, worked in telecommunications industry (Egypt). Ibrahim takes care of team communication and exploration of market potential. His experience comprises micro-controllers and software engineering.",

"Jaisal, our tech savvy, worked for Intel Corporation, India. His experience comprises mixed signal IC and physical design, as well as IoT product development. He is responsible for hardware design and development of our product.",

"Jori has work experience in automotive, software and telecommunications industry (Germany) and handles our corporate finances. Jori's academic background is in Interaction Design and Industrial Psychology/Computer Science.",

"Ahmed worked for a Chinese telecommunications' provider in Egypt. His experience comprises Mixed Signal IC, Physical Design, and IoT product development. He is taking care of the software development of our product.",

"Farbod is polyglot and qualifies for overseeing our sales activities due to his work experience in applied research at SICS/MDH. Besides this he is proficient in VHDL, SQL, Assembler and C programming.",

"Zhuoming combines an academic background in Automation Engineering (China) with proficiency in Interaction Design and User Experience, which qualifies him to act as our lead interaction designer to shape our product.",

];

$scope.addPics=function(i){
pictures.push({
title:titles[i],
subtitle:subtitles[i],
url:img[i].url,
summary:dummyText[i]
});
};

for (var i=0;i<6;i++){
$scope.addPics(i);
}

//$scope.rate = 0;stack
//$scope.max = 10;
//$scope.isReadonly = false;

});
