'use strict';

app.controller('RecipeCtrl', ['$scope', 'Recipe', 'toaster', 'ngProgress', function($scope, Recipe, toaster, ngProgress) {
	$scope.recipe = {
		ingredients: []
	};
  	$scope.availableTags = ['Rice/Pasta','Risotto','Plov','Jam','Boil','Stew','Fry','Yoghurt','Reheat','Bake','Steam'];
  	$scope.availableIngredients = [
  		{ name: 'potatoes', unit: 'kg', quantity: null },
  		{ name: 'milk', unit: 'ml', quantity: null },
  		{ name: 'carrots', unit: 'pcs', quantity: null}
  	];
  	$scope.addRecipe = function(recipe) {
  		ngProgress.start();
  		//angular.copy is a hack to remove $$hasKey from ingredients array
  		Recipe.addRecipe(angular.copy(recipe))
  		.then(function() {
  			ngProgress.complete();
  			toaster.pop('success', 'ok');
  		},function(error) {
  			ngProgress.complete();
  			toaster.pop('alert', error.message, 'not ok')
  		});
  	}
}]);