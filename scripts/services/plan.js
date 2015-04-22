'use strict'

app.factory('Plan', ['FURL', '$firebaseArray', function(FURL, $firebaseArray) {

	var ref = new Firebase(FURL);

	var Plan = {
		createPlan: function(plan, user) {
			var createdPlan = _.chain(plan.days)
				.map('ingredients')
				.flatten()
				.groupBy('name')
				.map(function(value, key) {
					return {
						name: key,
						quantity: (value.length > 1) ? value.reduce(function(a, b) { return a + b.quantity }, 0) : value[0].quantity || 'none',
						unit: value[0].unit || 'none'
					}
				})
				.sortBy('name')
				.value();
			var output = {
				date: new Date(),
				content: createdPlan
			};
			console.log(output, user.uid)
			return $firebaseArray(ref.child('user_plans').child(user.uid)).$add(output)
		}
	};

	return Plan;

}]);