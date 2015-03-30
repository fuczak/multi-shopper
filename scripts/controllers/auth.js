'use strict';

app.controller('AuthCtrl', ['$scope', 'Auth', function($scope, Auth) {
	$scope.register = function(user) {
		Auth.register(user).then(function(data) {
			alert(JSON.stringify(data))
		});
	}
}]);