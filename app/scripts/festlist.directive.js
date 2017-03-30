(function() {
  'use strict';

    function festlistDirective() {
      return {
        restrict: 'E',
        scope: {},
        templateUrl: '/views/festlist.html',
        // controller: headerController,
        // controllerAs: 'vm'
      };
    }

    angular.module('clientApp')
      .directive('rfFestList', festlistDirective);


}());
