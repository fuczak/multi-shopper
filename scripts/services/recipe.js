'use strict';

app.factory('Recipe', ['FURL', 'Auth', '$firebaseArray', function(FURL, Auth, $firebaseArray) {
	
	var ref = new Firebase(FURL);

	var Recipe = {
		defaultRecipes: $firebaseArray(ref.child('default_recipes')),
		userRecipes: $firebaseArray(ref.child('user_recipes')),
		addRecipe: function(recipe, user) {
			recipe.author = user.profile;
			return $firebaseArray(ref.child('user_recipes').child(user.uid)).$add(recipe);
		}
	}

	return Recipe;
}]);