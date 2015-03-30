'use strict';

app.factory('Auth', ['FURL', '$firebaseAuth', '$firebase', function(FURL, $firebaseAuth, $firebase) {

	var ref = new Firebase(FURL);
	var auth = $firebaseAuth(ref);

	var Auth = {
		user: {},
		register: function(user) {
			return auth.$createUser({
				email: user.email,
				name: user.name,
				password: user.password
			})
			.then(function() {
				return console.log(user)
			})
		}
	};

	return Auth;
}]);