(function() {
  'use strict';

  angular.module('clientApp')
  .directive('restFest', layoutDirective);

    function layoutDirective() {
      return {
        restrict: 'E',
        scope: {},
        templateUrl: '/views/layout.directive.html',
        controller: LayoutController,
        controllerAs: 'vm'
      };
    }

    LayoutController.$inject = ['$log'];

    function LayoutController($log) {
      const vm = this;
      vm.showPostForm = false;
      vm.button = toggleButtonDeets();

      vm.togglePostForm = togglePostForm;

      function togglePostForm() {
        vm.showPostForm = !vm.showPostForm;
        vm.button = toggleButtonDeets();
      }

      function toggleButtonDeets(){
        if(vm.showPostForm) {
          return {text: 'Nevermind, I\'m Just Looking!',
                  class: 'btn-danger'}
        } else {
          return {text: 'Post a Fest!',
                  class: 'btn-success'}
        }
      }



    }



}());
