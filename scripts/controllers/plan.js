'use strict';

app.controller('PlanCtrl', ['$scope', 'Recipe', function($scope, Recipe) {

	$scope.recipes = Recipe.defaultRecipes;
	$scope.plan = {
		days: []
	};

	$scope.$watch('daynum', function(oldValue, newValue) {
		$scope.plan.days = [];
		if($scope.daynum) {
			for(var i = 0; i < $scope.daynum; i++) {
				$scope.plan.days.push({});
			}
		}
	})

	$scope.submitPlan = function(plan) {
		$scope.neededIngredients = [];
		$scope.neededIngredients = _.flatten(_.map(plan.days, 'ingredients'))
		$scope.neededIngredients.map(function(e) {
			var index = $scope.neededIngredients.indexOf(e)
			return index === -1 ? e : console.log($scope.neededIngredients[index])
		})
	};
}]);