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

    PostController.$inject = ['$log', 'festFactory'];

    function PostController($log, festFactory) {
      const vm = this;
      vm.post = {};
      vm.bands = [{id: 'band1'}];
      vm.addBand = addBand;
      vm.removeBand = removeBand;
      vm.postFormSubmit = postFormSubmit;

      function addBand() {
        var newBandNo = vm.bands.length + 1;
        vm.bands.push({id: 'band'+newBandNo})
      }

      function removeBand() {
        var lastBand = vm.bands.length -1;
        vm.bands.splice(lastBand);
      }

      function postFormSubmit(form) {
        if(vm.bands[length-1] === undefined) {
          vm.bands.splice(length-1);
        }

        vm.post.headliners = vm.bands.map(function (band) {
          return band.name;
        })
        console.log(vm.post);
        festFactory.addFest(vm.post)
      }


    }



}());
