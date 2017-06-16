
angular.module('tab.route', ['tab.controller'])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

      .state('tab', {
        url: '/tab',
        abstract: true,//抽象路由
        templateUrl: 'areas/tab/tab.html',
        controller: 'TabCtrl'
      })

  });
