'use strict';

/**
 * @ngdoc function
 * @name hl2304App.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the hl2304App
 */
 /**
angular.module('hl2304App')
  .controller('SignupCtrl', ['$scope','$location','$firebaseAuth', function($scope,$location,$firebaseAuth) {
 	$scope.mesg = 'Hello';


 	var firebaseObj = new Firebase("https://zumbio-d8966.firebaseio.com");
    /*var auth = $firebaseAuth(firebaseObj);*/

    /**var login={};
    $scope.login=login;


    $scope.signUp = function() {
    if (!$scope.regForm.$invalid) {
        var email = $scope.user.email;
        var password = $scope.user.password;
        if (email && password) {
            login.loading = true;

    firebaseObj.createUser({email: $scope.user.email, password: $scope.user.password})
                .then(function() {
                    // do things if success
                    login.loading  = false;
                    console.log('User creation success');
                    $location.path('/home');
                }, function(error) {
                    // do things if failure
                    login.loading  = false;
                    console.log(error);
                    $scope.regError = true;
                    $scope.regErrorMessage = error.message;
                });
        }
    }
};
}]);**/

/**
angular.module('hl2304App')

  .controller('AuthCtrl', function(Auth, $state){
    var authCtrl = this;

    authCtrl.user = {
      email: '',
      password: ''
    };
 
authCtrl.register = function (){
  Auth.$signInWithEmailAndPassword(authCtrl.user.email, authCtrl.user.password).then(function (auth){
    $state.go('home');
  }, function (error){
    authCtrl.error = error;
  });

};

 
authCtrl.signup = function (){
  Auth.$createUserWithEmailAndPassword(authCtrl.user.email, authCtrl.user.password).then(function (user){
    $state.go('home');
  }, function (error){
    authCtrl.error = error;
  });

};
 });
**/



  angular.module('hl2304App')

  .controller('SignupCtrl', ['$scope','FbAuthService',function($scope,FbAuthService){

    $scope.register = function(email,password,info){
    FbAuthService.register(email,password,info);
};


}]);

  angular.module('hl2304App')
    .service('FbAuthService',['$firebaseAuth','$location',function($firebaseAuth,$location){

var config = {
    apiKey: "AIzaSyC7LFtf_f2eSSdvsNX4HwThmNVDw0m5D_M",
    authDomain: "zumbio-d8966.firebaseapp.com",
    databaseURL: "https://zumbio-d8966.firebaseio.com",
    projectId: "zumbio-d8966",
    storageBucket: "zumbio-d8966.appspot.com",
    messagingSenderId: "171329020104"
  };
  firebase.initializeApp(config);


// Authentication   
var authObj = $firebaseAuth();
var self = {};

self.register = function(email,password,info){
    authObj.$createUserWithEmailAndPassword(
        email,
        password
    ).then(function(newUser){

        //add Info from Signup to USERS => newUser.id => info(Object)
        var ref = firebase.database().ref().child('users').child(newUser.uid);
        ref.set({ firstname: info.firstname, lastname: info.lastname, uid: newUser.uid });
        $location.path('/login');
    }).catch(function(error){
       console.log(error.message);
    });
};

return self;
}]);





