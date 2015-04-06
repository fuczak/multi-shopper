'use strict';

app.controller('RecipeCtrl', ['$scope', 'Recipe', 'Ingredient', 'Auth', 'toaster', 'ngProgress', function($scope, Recipe, Ingredient, Auth, toaster, ngProgress) {
	$scope._ = _;
	$scope.recipe = {
		ingredients: []
	};

	$scope.availableTags = ['Rice/Pasta','Risotto','Plov','Jam','Boil','Stew','Fry','Yoghurt','Reheat','Bake','Steam'];
	$scope.availableIngredients = Ingredient.defaultIngredients;

  $scope.recipes = Recipe.defaultRecipes;

	$scope.addRecipe = function(recipe, user) {
		ngProgress.start();
		//angular.copy is a hack to remove $$hasKey from ingredients array
		Recipe.addRecipe(angular.copy(recipe), Auth.user)
		.then(function() {
			ngProgress.complete();
			toaster.pop('success', 'Your recipe has been added!');
		},function(error) {
			ngProgress.complete();
			toaster.pop('alert', error.message)
		});
	};
}]);