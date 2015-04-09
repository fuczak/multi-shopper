'use strict';

app.controller('FridgeCtrl', ['$scope', 'Auth', 'Ingredient', 'ngProgress', 'toaster', function($scope, Auth, Ingredient, ngProgress, toaster) {
	$scope._ = _;
	$scope.availableIngredients = Ingredient.defaultIngredients;
	$scope.fridge = {
		ingredients: Ingredient.getFridge(Auth.user)
	}
	$scope.updateFridge = function(ingredients) {
		ngProgress.start();
		Ingredient.updateFridge(ingredients, Auth.user).then(function() {
			toaster.pop('success', 'Your fridge has been updated.')
			ngProgress.complete();
		}, function(error) {
			ngProgress.complete();
			toaster.pop('warning', error.message);
		});
	};
	$scope.removeIngredient = function(ingredient) {
		Ingredient.removeFromFridge(ingredient, Auth.user);
	};
	$scope.addToFridge = function(ingredient) {

		var isDuplicate = function(ingredient) {
			return ingredient.name === this.name
		}

		if(!$scope.fridge.ingredients.some(isDuplicate, ingredient)) {
			Ingredient.addToFridge(ingredient, Auth.user).then(function() {
				toaster.pop('success', ingredient.name + ' has been placed in your fridge.')
			}, function(error) {
				toaster.pop('warning', error.message)
			})
		} else {
			toaster.pop('info', ingredient.name + ' is already in your fridge.')
		}

		$scope.fridge.newIngredient = undefined;
	}

}]);