(function() {
  'use strict';

    function layoutDirective() {
      return {
        restrict: 'E',
        scope: {},
        templateUrl: '/views/layout.directive.html',
      };
    }

    angular.module('clientApp')
      .directive('restFest', layoutDirective);


}());
