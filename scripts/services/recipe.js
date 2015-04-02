'use strict';

app.factory('Recipe', ['FURL', 'Auth', '$firebaseArray', function(FURL, Auth, $firebaseArray) {
	var ref = new Firebase(FURL);

	var Recipe = {
		addRecipe: function(recipe) {
			recipe.author = Auth.user.profile;
			return $firebaseArray(ref.child('user_recipes')).$add(recipe);
		}
	}

	return Recipe;
}]);