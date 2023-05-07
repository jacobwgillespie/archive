'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.signIn',
  'myApp.ptDashboard',
  'myApp.provDashboard',
  'myApp.provPtList',
  'myApp.provVisitList',
  'myApp.provVisitDetail',
  'myApp.provCreateVisit',
  'myApp.provRefer',
  'myApp.ptViewRecords',
  'myApp.ptChartDetail',
  'myApp.ptDemographics',
  'myApp.ptAuth',
  'myApp.version',
  'filters',
  'AuthenticationService',
  'EMRService',
  'ngCookies',
  'base64'
]).

config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/signIn'});
}]).

run(['$rootScope', '$location', '$cookieStore', '$http', 'AuthenticationService', function($rootScope, $location, $cookieStore, $http, AuthenticationService){
  $rootScope.globals = $cookieStore.get('globals') || {};
  if($rootScope.globals.currentUser){
    $http.defaults.headers.common['Authorization'] = 'Basic '+ $rootScope.globals.currentUser.auth;
  }

  $rootScope.$on('$locationChangeStart', function(event, next, current){
    var restricted = $.inArray($location.path(), ['/signIn']) === -1;
    var loggedIn = $rootScope.globals.currentUser;
    if (restricted && !loggedIn) {
      $location.path('/signIn')
    };
  })

  $rootScope.signOut = function(){
    AuthenticationService.ClearCredentials();
    $location.path('/signIn');
  }
}])
