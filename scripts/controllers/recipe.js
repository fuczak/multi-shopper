'use strict';

app.controller('RecipeCtrl', ['$scope', 'Recipe', 'Ingredient', 'toaster', 'ngProgress', function($scope, Recipe, Ingredient, toaster, ngProgress) {
	$scope._ = _;
	$scope.recipe = {
		ingredients: []
	};
  	$scope.availableTags = ['Rice/Pasta','Risotto','Plov','Jam','Boil','Stew','Fry','Yoghurt','Reheat','Bake','Steam'];
  	$scope.availableIngredients = Ingredient.defaultIngredients;
  	$scope.addRecipe = function(recipe) {
  		ngProgress.start();
  		//angular.copy is a hack to remove $$hasKey from ingredients array
  		Recipe.addRecipe(angular.copy(recipe))
  		.then(function() {
  			ngProgress.complete();
  			toaster.pop('success', 'Your recipe has been added!');
  		},function(error) {
  			ngProgress.complete();
  			toaster.pop('alert', error.message)
  		});
  	};
  	$scope.recipes = Recipe.defaultRecipes;
  	//The code below is only for generating ingredient list as a reference
  	// $scope.test = [];
  	// $scope.evalIngredients = function() {
  	// 	for (var i = 0; i < $scope.recipes.length; i++) {
  	// 		for (var j = 0; j < $scope.recipes[i].ingredients.length; j++) {
  	// 			$scope.test.push($scope.recipes[i].ingredients[j].name)
  	// 		}
  	// 	} 
  	// 	console.log($scope.test.length);
  	// 	$scope.uniqueTest = _.uniq($scope.test);
  	// 	console.log($scope.uniqueTest.length)
  	// };
}]);