'use strict';

app.controller('PlanCtrl', ['$scope', 'Recipe', function($scope, Recipe) {

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
		$scope.neededIngredients = [];
		$scope.neededIngredients = _.chain(plan.days)
			.map('ingredients')
			.flatten()
			.groupBy('name')
			.map(function(value, key) {
				return {
					name: key,
					quantity: (value.length > 1) ? value.reduce(function(a, b) { return a + b.quantity }, 0) : value[0].quantity,
					unit: value[0].unit
				}
			})
			.sortBy('name');
	};
}]);