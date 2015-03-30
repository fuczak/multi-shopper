'use strict';

app.factory('Auth', ['FURL', '$firebaseAuth', function(FURL, $firebaseAuth) {

	var ref = new Firebase(FURL);
	var auth = $firebaseAuth(ref);

	var Auth = {
		user: {},
		register: function(user) {
			return auth.$createUser({
				email: user.email,
				password: user.password
			})
			.then(function() {
				return Auth.login(user);
			})
			.then(function(data) {
				return Auth.createProfile(data.uid, user);
			});
		},
		createProfile: function(uid, user) {
			var profile = {
				name: user.name,
				email: user.email
			};
			var profileRef = ref.child('profiles');
			return profileRef.child(uid).set(profile);
		},
		login: function(user) {
			return auth.$authWithPassword({
				email: user.email,
				password: user.password
			});
		}
	};

	return Auth;
}]);