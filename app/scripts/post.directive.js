(function() {
  'use strict';

  angular.module('clientApp')
  .directive('rfPost', postDirective);

    function postDirective() {
      return {
        restrict: 'E',
        scope: {
          foo: '='
        },
        templateUrl: '/views/posts.html',
        controller: PostController,
        controllerAs: 'vm'
      };
    }

    PostController.$inject = ['$log', '$scope', 'festFactory'];

    function PostController($log, $scope, festFactory) {
      const vm = this;

      vm.post = {};
      vm.bands = [{id: 1}];
      vm.addBand = addBand;
      vm.removeBand = removeBand;
      vm.postFormSubmit = postFormSubmit;
      vm.toggleForm = $scope.foo

      function addBand() {
        var newBandNo = vm.bands.length + 1;
        vm.bands.push({id: newBandNo})
      }

      function removeBand() {
        var lastBand = vm.bands.length -1;
        vm.bands.splice(lastBand);
      }

      function postFormSubmit(form) {

        vm.post.headliners = vm.bands.map(function (band) {
          return band.name;
        })
        vm.post.postedOn = new Date();
        console.log(vm.post);
        festFactory.addFest(vm.post);
        vm.post = {};
        vm.bands = [{id: 1}];
        vm.toggleForm();


      }


    }



}());
