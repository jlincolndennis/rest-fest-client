(function() {
  'use strict';

  angular.module('clientApp')
  .directive('rfPost', postDirective);

    function postDirective() {
      return {
        restrict: 'E',
        scope: {},
        templateUrl: '/views/posts.html',
        controller: PostController,
        controllerAs: 'vm'
      };
    }

    PostController.$inject = ['$log'];

    function PostController($log) {
      const vm = this;
      vm.bands = [{id: 'band1'}];
      vm.addBand = addBand;
      vm.removeBand = removeBand;

      function addBand() {
        var newBandNo = vm.bands.length + 1;
        vm.bands.push({id: 'band'+newBandNo})
      }

      function removeBand() {
        var lastBand = vm.bands.length -1;
        vm.bands.splice(lastBand);

      }


    }



}());
