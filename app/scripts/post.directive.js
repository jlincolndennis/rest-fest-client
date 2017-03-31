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
        templateUrl: '/views/postform.html',
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
        /// WHY YOU NO LIKE FAT ARROWS, JSLINT???
        vm.post.headliners = vm.bands.map(function (band) {
          return band.name;
        })
        console.log(vm.post.headliners);
        if(vm.post.headliners[0] === undefined){
          vm.post.headliners[0] ='TBA';
        }

        vm.post.postedOn = new Date();
        festFactory.addFest(vm.post);
        formReset(form);
        vm.toggleForm();
      }

      function formReset(form) {
        form.$setPristine();
        form.$setUntouched();
        vm.post = {};
        vm.bands = [{id: 1}];
      }

    }



}());
