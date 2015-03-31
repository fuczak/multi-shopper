'use strict';

app.controller('AuthCtrl', ['$scope', 'Auth', 'toaster', '$location', 'ngProgress', function($scope, Auth, toaster, $location, ngProgress) {
	
	$scope.register = function(user) {
		ngProgress.start();
		Auth.register(user).then(function() {
			ngProgress.complete();
		 	$scope.user = '';
		 	$location.path('/');
			toaster.pop('success', 'Thank you for signing up!');
		},function(error) {
			ngProgress.complete();
			toaster.pop('warning', error.message)
		});
	}

	$scope.login = function(user) {
		ngProgress.start();
		Auth.login(user).then(function() {
			ngProgress.complete();
			$location.path('/');
			toaster.pop('success', 'Welcome back!');
		}, function(error) {
			ngProgress.complete();
			toaster.pop('warning', error.message);
			if (error.code === 'INVALID_USER') {
				$scope.user.email = ''
			}
			$scope.user.password = '';
		})
	}
}]);