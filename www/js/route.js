// Ionic Starter App
angular.module('route', ['guidePage.route','tab.route','home.route','category.route','goodsList.route','details.route','cart.route','account.route'])

		.config(function($stateProvider, $urlRouterProvider) {

				$urlRouterProvider.otherwise('/tab/home');

		});
