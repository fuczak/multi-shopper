'use strict';

app.controller('PlanCtrl', ['$scope', 'Recipe', 'Plan', 'Auth', function($scope, Recipe, Plan, Auth) {

	$scope.user = Auth.user;
	$scope.recipes = Recipe.defaultRecipes;
	$scope.plan = {
		days: []
	};

	$scope.$watch('daynum', function(oldValue, newValue) {
		$scope.plan.days = [];
		$scope.neededIngredients = [];
		if($scope.daynum) {
			for(var i = 0; i < $scope.daynum; i++) {
				$scope.plan.days.push({});
			}
		}
	})

	$scope.submitPlan = function(plan) {
		Plan.createPlan(plan, $scope.user);
		$scope.daynum = 0;
	};
}]);