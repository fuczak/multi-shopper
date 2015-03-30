'use strict';

app.controller('AuthCtrl', ['$scope', 'Auth', 'toaster', '$location', function($scope, Auth, toaster, $location) {
	$scope.register = function(user) {
		Auth.register(user).then(function(data) {
			console.log(data)
		 	$scope.user = '';
		 	$location.path('/');
			toaster.pop('success', 'Thank you for signing up!');
		});
	}
}]);