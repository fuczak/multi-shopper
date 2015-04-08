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
		updateFridge: function(ingredient, user) {
			console.log(ingredient)
		},
		removeFromFridge: function(ingredient, user) {
			// alert(ingredient.$id)
			console.log($firebaseArray(ref.child('profiles').child(user.uid).child('fridge_stock')).$getRecord(ingredient.$id+''));
			// alert($firebaseArray(ref.child('profiles').child(user.uid).child('fridge_sto	ck')).$indexFor(ingredient.$id));
			// console.log($firebaseArray(ref.child('profiles').child(user.uid).child('fridge_stock')))
		}
	};

	return Ingredient;

}]);