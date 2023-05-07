'use strict';

angular.module('myApp.provVisitDetail', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/prov/visits/:lastName/:id', {
    templateUrl: 'provViews/patientList/visitDetails.html',
    controller: 'provVisitDetailCtrl'
  });
}])

.controller('provVisitDetailCtrl', ['$scope','$cookieStore','$routeParams', function(sc, $cookieStore, $routeParams) {
	sc.globals = $cookieStore.get('globals');
	sc.provider = EMRService.GetProvider(sc.globals.username);

	sc.patient= EMRService.GetPatientByID($routeParams.id);

	sc.visits=EMRService.GetPatientVisitsByID($routeParams.id);

}]);