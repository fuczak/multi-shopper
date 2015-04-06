'use strict';

app.service('Ingredient', ['FURL', '$firebaseArray', function(FURL, $firebaseArray) {

	var ref = new Firebase(FURL);

	var Ingredient = {
		defaultIngredients: function() {
			$firebaseArray(ref.child('default_ingredients'));
		}
	};

	return Ingredient;

}]);