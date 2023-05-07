'use strict';

angular.module('myApp.provCreateVisit', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/prov/visit', {
    templateUrl: 'provViews/createVisit/createVisit.html',
    controller: 'provCreateVisitCtrl'
  });
}])

.controller('provCreateVisitCtrl', ['$scope', 'EMRService','$cookieStore', function(sc, EMRService,$cookieStore) {
	sc.globals = $cookieStore.get('globals');
	sc.provider = EMRService.GetProvider(sc.globals.username);

	sc.patients= EMRService.GetProviderPatients(sc.globals.username);

	sc.visit={'examDate' : new Date(),
	 'reason' : '',
	 'provider' : sc.globals.username,
	 'height' : '',
	 'weight' : '',
	 'systolic' : '',
	 'diastolic' : '',
	 'symptoms' : '',
	 'notes' : '',
	 'perscription': '',
	 'id' : ''
	};

	sc.saveVisit = function(){
		EMRService.SaveVisit(sc.visit);
	}

}]);