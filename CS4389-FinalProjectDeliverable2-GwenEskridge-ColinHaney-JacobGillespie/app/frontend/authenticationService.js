angular.module('AuthenticationService',[]).factory('AuthenticationService', ['$http', '$cookieStore', '$rootScope', '$timeout', '$base64',
 function($http, $cookieStore, $rootScope, $timeout, $base64) {
	var service ={};

	service.Login = Login;
	service.SetCredentials = SetCredentials;
	service.ClearCredentials = ClearCredentials;

	return service;

	function Login(username, password, callback) {
		console.log('login function');
		 // /* Dummy authentication for testing, uses $timeout to simulate api call
   //           ----------------------------------------------*/
   //          $timeout(function () {
   //              var response;
   //              if(username != null && password != null)
   //              	{response = {success: true, type: 'patient'}}
   //              else{response = {success: false, message: 'Username or password is incorrect'}}
   //              callback(response);
   //          }, 10);

		$http.post('/api/authenticate', {username: username, password: password})
			.success(function(response) {
				callback(response);
			});
	}

	function SetCredentials(username, password) {
		var auth = $base64.encode(unescape(encodeURIComponent(username + ':' + password)));

		$rootScope.globals = {
			currentUser: {
				username: username,
				auth: auth
			}
		};

		$http.defaults.headers.common['Authorization'] = 'Basic ' + auth;
		$cookieStore.put('globals', $rootScope.globals);
	}

	function ClearCredentials() {
		$rootScope.globals = {};
		$cookieStore.remove('globals');
		$http.defaults.headers.common.Authorization = 'Basic';
	}
}])