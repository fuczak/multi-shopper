'use strict';

app.factory('Auth', ['FURL', '$firebase', function(FURL, $firebase) {

	var ref = new Firebase(FURL);

	var Auth = {
		user: {},
		register: function(user) {
			ref.createUser({
				email: user.email,
				password: user.password
			}, function(error, userData) {
				if (error) {
					alert(error)
				} else {
					Auth.createProfile(userData.uid, user);
					Auth.login(user);
				}
			})
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
			ref.authWithPassword({
				email: user.email,
				password: user.password
			}, function(error, authData) {
				if (error) {
					alert(error)
				} else {
					alert('logged in as ' + user.name)
				}
			});
		}
	};

	return Auth;
}]);