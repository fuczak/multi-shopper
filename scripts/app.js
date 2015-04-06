'use strict';

var app = angular.module('MultiShopper', ['ngRoute', 'snap', 'ui.gravatar', 'firebase', 'toaster', 'ngProgress', 'ngAnimate', 'ui.select', 'ngSanitize'])
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
	.run(['$rootScope', '$timeout', '$window', 'snapRemote', function($rootScope, $timeout, $window, snapRemote) {
		$rootScope.$on('$routeChangeSuccess', function() {
			snapRemote.close();
			$timeout(function() {
				$window.scrollTo(0,0);
			}, 500);
		});
	}])
	.run(['ngProgress', function(ngProgress) {
		ngProgress.height("10px");
		ngProgress.color("white");
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
			.when('/plan', {
				templateUrl: 'views/plan.html'
			})
			.when('/fridge', {
				templateUrl: 'views/fridge.html'
			})
			.when('/browse', {
				templateUrl: 'views/browse.html',
				controller: 'RecipeCtrl'
			})
			.when('/add-recipe', {
				templateUrl: 'views/add-recipe.html',
				controller: 'RecipeCtrl'
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
			size: 40
		};
	}]);