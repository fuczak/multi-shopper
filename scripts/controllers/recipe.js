'use strict';

app.controller('RecipeCtrl', ['$scope', function($scope) {
	$scope.recipe = {};
  	$scope.availableTags = ['Rice/Pasta','Risotto','Plov','Jam','Boil','Stew','Fry','Yoghurt','Reheat','Bake','Steam'];
}]);