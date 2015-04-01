'use strict';

app.factory('Auth', ['FURL', '$firebaseAuth', '$firebaseObject', function(FURL, $firebaseAuth, $firebaseObject) {

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
		},
		logout: function() {
			auth.$unauth();
		}	
	};
	//Every time authentication state changes
	auth.$onAuth(function(authData) {
		if (authData) {
			//if authentication data exists, get user profile and attach it to Auth.user object
			angular.copy(authData, Auth.user);
			Auth.user.profile = $firebaseObject(ref.child('profiles').child(authData.uid));
			//if there is no authentication data, clear Auth.user object
		} else {
			if (Auth.user && Auth.user.profile) {
				Auth.user.profile.$destroy();
			}
			angular.copy({}, Auth.user);
		}
	});

	return Auth;
}]);