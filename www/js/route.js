// Ionic Starter App
angular.module('route', ['guidePage.route','tab.route','home.route','category.route','goodsList.route','details.route'])

		.config(function($stateProvider, $urlRouterProvider) {

				$urlRouterProvider.otherwise('/tab/home');

		});
