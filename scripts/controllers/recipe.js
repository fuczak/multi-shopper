'use strict';

app.controller('RecipeCtrl', ['$scope', function($scope) {
	$scope.recipe = {
		ingredients: []
	};
  	$scope.availableTags = ['Rice/Pasta','Risotto','Plov','Jam','Boil','Stew','Fry','Yoghurt','Reheat','Bake','Steam'];
  	$scope.availableIngredients = [
  		{ name: 'potatoes', unit: 'kg', quantity: null },
  		{ name: 'milk', unit: 'ml', quantity: null },
  		{ name: 'carrots', unit: 'pcs', quantity: null}
  	];
  	
}]);