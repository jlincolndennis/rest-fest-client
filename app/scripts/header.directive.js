(function() {
  'use strict';
  
  angular.module('clientApp')
  .directive('rfHeader', headerDirective);

    function headerDirective() {
      return {
        restrict: 'E',
        scope: {},
        templateUrl: '/views/header.html',
        // controller: headerController,
        // controllerAs: 'vm'
      };
    }



}());
