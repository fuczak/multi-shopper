'use strict';

app.service('Ingredient', ['FURL', '$firebaseArray', function(FURL, $firebaseArray) {

	var ref = new Firebase(FURL);

	var Ingredient = {
		defaultIngredients: $firebaseArray(ref.child('ingredients'))
	};

	return Ingredient;

}]);