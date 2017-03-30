(function() {
  'use strict';

    function headerDirective() {
      return {
        restrict: 'E',
        scope: {},
        templateUrl: '/views/header.html',
        // controller: headerController,
        // controllerAs: 'vm'
      };
    }

    angular.module('clientApp')
      .directive('rfHeader', headerDirective);


}());
