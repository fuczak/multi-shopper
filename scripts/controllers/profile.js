'use strict';

app.controller('ProfileCtrl', ['$scope', 'Auth', 'snapRemote', function($scope, Auth, snapRemote) {

	$scope.user = Auth.user;
	$scope.showBar = false;

	snapRemote.getSnapper().then(function(snapper) {
		snapper.on('open', function() {
			$('.material--burger').addClass('material--arrow');
			$scope.showBar = true;
		});
		snapper.on('close', function() {
			$('.material--burger').removeClass('material--arrow');
			$scope.showBar = false;
		})
	})

}]);