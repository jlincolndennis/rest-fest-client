(function() {
  'use strict';

  angular.module('clientApp')
  .directive('rfFestList', festlistDirective);

    function festlistDirective() {
      return {
        restrict: 'E',
        scope: {},
        templateUrl: '/views/festlist.html',
        controller: FestListController,
        controllerAs: 'vm'
      };
    }

    FestListController.$inject = ['$log', 'festFactory'];

    function FestListController($log, festFactory) {
      const vm = this;
      vm.fests = festFactory.getFests();

    }



}());
