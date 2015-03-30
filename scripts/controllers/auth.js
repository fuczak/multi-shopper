'use strict';

app.controller('AuthCtrl', ['$scope', function($scope) {
	$scope.register = function(user) {
		alert(JSON.stringify(user))
	}
}]);