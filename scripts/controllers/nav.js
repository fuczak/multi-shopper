'use strict';

app.controller('NavCtrl', ['$scope', 'Auth', function($scope, Auth) {

	$scope.user = Auth.user;

	$scope.logout = function() {
		Auth.logout();
	};

}]);