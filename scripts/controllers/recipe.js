'use strict';

app.controller('RecipeCtrl', ['$scope', 'Recipe', function($scope, Recipe) {
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
  		Recipe.addRecipe(recipe)
  		.then(function(data) {
  			toaster.pop('success', data.message)
  		},function(error) {
  			toaster.pop('alert', error.message)
  		});
  	}
}]);