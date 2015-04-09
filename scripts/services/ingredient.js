'use strict';

app.service('Ingredient', ['FURL', '$firebaseArray', function(FURL, $firebaseArray) {

	var ref = new Firebase(FURL);

	var Ingredient = {
		defaultIngredients: $firebaseArray(ref.child('ingredients')),
		getFridge: function(user) {
			return $firebaseArray(ref.child('profiles').child(user.uid).child('fridge_stock'));
		},
		addToFridge: function(ingredient, user) {
			return $firebaseArray(ref.child('profiles').child(user.uid).child('fridge_stock')).$add(ingredient);
		},
		updateFridge: function(ingredients, user) {
			return $firebaseArray(ref.child('profiles').child(user.uid).child('fridge_stock')).$loaded(function(list) {
				for (var i = 0; i < ingredients.length; i++) {
					if (ingredients[i].quantity) {
						var x = list.$indexFor(ingredients[i].$id);
						list[x].quantity = ingredients[i].quantity;
						list.$save(x);
					};
				};
			});
		},
		removeFromFridge: function(ingredient, user) {
			$firebaseArray(ref.child('profiles').child(user.uid).child('fridge_stock')).$loaded(function(list) {
				var x = list.$indexFor(ingredient.$id);
				return list.$remove(list[x]);
			});
		}
	};

	return Ingredient;

}]);