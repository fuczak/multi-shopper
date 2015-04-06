'use strict';

app.factory('Recipe', ['FURL', 'Auth', '$firebaseArray', function(FURL, Auth, $firebaseArray) {
	
	var ref = new Firebase(FURL);

	var Recipe = {
		defaultRecipes: $firebaseArray(ref.child('default_recipes')),
		userRecipes: $firebaseArray(ref.child('user_recipes')),
		addRecipe: function(recipe) {
			recipe.author = Auth.user.profile;
			return $firebaseArray(ref.child('user_recipes')).$add(recipe);
		}
	}

	return Recipe;
}]);