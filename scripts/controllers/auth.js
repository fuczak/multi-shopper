'use strict';

app.controller('AuthCtrl', ['$scope', 'Auth', 'toaster', '$location', 'ngProgress', function($scope, Auth, toaster, $location, ngProgress) {
	$scope.register = function(user) {
		ngProgress.start();
		Auth.register(user).then(function() {
			ngProgress.complete();
		 	$scope.user = '';
		 	$location.path('/');
			toaster.pop('success', 'Thank you for signing up!');
		});
	}
}]);