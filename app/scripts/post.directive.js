(function() {
  'use strict';

  angular.module('clientApp')
  .directive('rfPost', postDirective);

    function postDirective() {
      return {
        restrict: 'E',
        scope: {},
        templateUrl: '/views/posts.html',
        // controller: headerController,
        // controllerAs: 'vm'
      };
    }



}());
