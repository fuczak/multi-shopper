'use strict';

app.controller('AuthCtrl', ['$scope', 'Auth', function($scope, Auth) {
	$scope.register = function(user) {
		Auth.register(user);
	}
}]);