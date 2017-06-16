angular.module('home.route', ['home.controller'])
  .config(function ($stateProvider, $urlRouterProvider) {

		  $stateProvider
		  //抽象路由的子路由
      .state('tab.home', {
        url: '/home',
        views: {
          'tab-home': {//ion-nav-view的name属性
            templateUrl: 'areas/home/home.html',
            controller: 'HomeCtrl'
          }
        }
      })

  });
