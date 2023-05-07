'use strict';

angular.module('myApp.signIn', ['ngRoute'])
	
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/signIn', {
    templateUrl: 'signIn/signIn.html',
    controller: 'SignInCtrl'
  });
}])

.controller('SignInCtrl', ['$scope','$http', '$location',  'AuthenticationService', function(sc, $http, $location, AuthenticationService) {
	//default username/pswd
	sc.email = "";
	sc.password = "";
	sc.invalidLogin = "false";

	sc.signIn = function() {
		console.log('Logging in');
		AuthenticationService.Login(sc.email, sc.password, function(response){
			if(response.success){
				console.log('login success');
				AuthenticationService.SetCredentials(sc.email, sc.password);
				console.log(response);
				if (response.type == 'physician') {
					$location.path('/prov/dashboard').replace();
				} else{$location.path('/pt/dashboard')}
				
			}
			else{
				console.log(response.message);
				invalidLogin = true;}
		});
	}
}])