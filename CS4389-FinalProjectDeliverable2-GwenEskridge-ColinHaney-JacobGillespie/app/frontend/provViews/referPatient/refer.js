'use strict';

angular.module('myApp.provRefer', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/prov/refer', {
    templateUrl: 'provViews/referPatient/refer.html',
    controller: 'provReferCtrl'
  });
}])

.controller('provReferCtrl', ['$scope','EMRService','$cookieStore', function(sc,EMRService,$cookieStore) {
	sc.globals = $cookieStore.get('globals');
	sc.provider = EMRService.GetProvider(sc.globals.username);

	sc.selectedPhys = {};

	sc.physicians = EMRService.GetPhysicians();

	sc.patients=EMRService.GetProviderPatients(sc.globals.username);

	sc.refer = function(patientID){
		EMRService.authorize(selectedPhys.id, patientID);
	}

}]);