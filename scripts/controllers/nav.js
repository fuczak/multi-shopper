'use strict';

app.controller('NavCtrl', ['$scope', 'Auth', function($scope, Auth) {
	$scope.user = Auth.user;
}]);