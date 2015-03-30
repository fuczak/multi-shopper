'use strict';

var app = angular.module('MultiShopper', ['ngRoute', 'snap'])
	.config(['$routeProvider', 'snapRemoteProvider', function($routeProvider, snapRemoteProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html'
			})
			.when('/login', {
				templateUrl: 'views/login.html'
			})
			.when('/register', {
				templateUrl: 'views/register.html'
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
			}
	}]);