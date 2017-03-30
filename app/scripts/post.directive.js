(function() {
  'use strict';

    function postDirective() {
      return {
        restrict: 'E',
        scope: {},
        templateUrl: '/views/posts.html',
        // controller: headerController,
        // controllerAs: 'vm'
      };
    }

    angular.module('clientApp')
      .directive('rfPost', postDirective);


}());
