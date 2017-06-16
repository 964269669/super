// Ionic Starter App
angular.module('route', ['guidePage.route','tab.route','home.route'])

		.config(function($stateProvider, $urlRouterProvider) {

				// Ionic uses AngularUI Router which uses the concept of states
				$stateProvider
				// setup an abstract state for the tabs directive


						// Each tab has its own nav history stack:

						.state('tab.dash', {
								url: '/dash',
								views: {
										'tab-dash': {
												templateUrl: 'templates/tab-dash.html',
												controller: 'DashCtrl'
										}
								}
						})

						.state('tab.chats', {
								url: '/chats',
								views: {
										'tab-chats': {
												templateUrl: 'templates/tab-chats.html',
												controller: 'ChatsCtrl'
										}
								}
						})
						.state('tab.chat-detail', {
								url: '/chats/:chatId',
								views: {
										'tab-chats': {
												templateUrl: 'templates/chat-detail.html',
												controller: 'ChatDetailCtrl'
										}
								}
						})

						.state('tab.account', {
								url: '/account',
								views: {
										'tab-account': {
												templateUrl: 'templates/tab-account.html',
												controller: 'AccountCtrl'
										}
								}
						});

				// if none of the above states are matched, use this as the fallback
				$urlRouterProvider.otherwise('/tab/home');

		});
