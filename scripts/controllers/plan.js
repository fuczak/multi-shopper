'use strict';

app.controller('PlanCtrl', ['$scope', 'Recipe', function($scope, Recipe) {

	$scope.recipes = Recipe.defaultRecipes;
	$scope.plan = {
		days: []
	};

	$scope.$watch('daynum', function(newValue, oldValue) {
		$scope.plan.days = [];
		if($scope.daynum) {
			for(var i = 0; i < $scope.daynum; i++) {
				$scope.plan.days.push({});
			}
		}
	})

}]);