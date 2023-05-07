'use strict';

angular.module('myApp.provPtList', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/prov/ptList', {
    templateUrl: 'provViews/patientList/ptList.html',
    controller: 'provPtListCtrl'
  });
}])

.controller('provPtListCtrl', ['$scope', 'EMRService','$cookieStore', function(sc, EMRService, $cookieStore) {
	sc.globals = $cookieStore.get('globals');
	sc.provider = EMRService.GetProvider(sc.globals.username);
	sc.selectedPatient = {};

	sc.patients=EMRService.GetProviderPatients(sc.globals.username);

}]);