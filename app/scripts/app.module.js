(function() {
  'use strict';

  const dependencies = [
    'ui.router',
    'ngAnimate',
    'ngMessages',
  ];

  angular.module('clientApp', dependencies);
  //   .config(setupRoutes)
  //
  // setupRoutes.$inject = ['$stateProvider',
  //                     '$urlRouterProvider',
  //                     '$locationProvider',
  //                     '$httpProvider'];
  //
  // function setupRoutes($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider){
  //   $locationProvider.html5Mode(true);
  //   $urlRouterProvider.otherwise("/");
  //
  //   $stateProvider
  //     .state('home', {
  //       url: '/',
  //       template: ''
  //     })
  //   }

}());
