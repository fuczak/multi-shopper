'use strict';

app.factory('Recipe', ['FURL', function(FURL) {
	var ref = new Firebase(FURL);

	var Recipe = {
		addRecipe: function(recipe) {
			for(var object in recipe.ingredients) {
				recipe.ingredients[object] = {
					object: recipe.ingredients[object]
				}
			}
			ref.child('recipes').push(recipe, function(data) {
				console.log(data);
			});
		}
	}

	return Recipe;
}]);