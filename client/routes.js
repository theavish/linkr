(function() {
  'use strict';

  angular.module('linkr')
    .config(routes);

  routes.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routes($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '../home/homeView.html'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
