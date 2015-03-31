'use strict';

var app = angular.module('MultiShopper', ['ngRoute', 'snap', 'ui.gravatar', 'firebase', 'toaster', 'ngProgress', 'ngAnimate'])
	.constant('FURL', 'https://multi-shopper.firebaseio.com')
	/* uncomment when authorization module is complete
	.run(function($rootScope, $location) {
		$rootScope.$on('$routeChangeError', function(event, next, previous, error) {
			if (error === 'AUTH_REQUIRED') {
				$location.path('/welcome');
			};
		});
	})
	*/
	.run(['$rootScope', '$timeout', '$window', function($rootScope, $timeout, $window) {
		$rootScope.$on('$routeChangeSuccess', function() {
			$timeout(function() {
				$window.scrollTo(0,0);
			}, 500);
		});
	}])
	.config(['$routeProvider', 'snapRemoteProvider', 'gravatarServiceProvider', function($routeProvider, snapRemoteProvider, gravatarServiceProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html'
			})
			.when('/login', {
				templateUrl: 'views/login.html',
				controller: 'AuthCtrl'
			})
			.when('/register', {
				templateUrl: 'views/register.html',
				controller: 'AuthCtrl'
			})
			.when('/browse', {
				templateUrl: 'views/browse.html'
			})
			.when('/dashboard', {
				templateUrl: 'views/dashboard.html'
			})
			.otherwise({
				redirectTo: '/'
			});
		snapRemoteProvider.globalOptions = {
			disable: 'right',
			//Enabling touch to drag only in touch devices
			touchToDrag: window.navigator.msMaxTouchPoints || 'ontouchstart' in document.createElement('div') ? true : false
		};
		gravatarServiceProvider.defaults = {
			'default': 'mm',
			size: 50
		};
	}]);