angular.module('eetup').factory('PreferenceData', ['$http', function($http) {
	var chosenType;
	var chosenPreference;

	return {
		saveType: function(type) {
			chosenType = type;
		},
		getType: function() {
			return chosenType;
		},
		savePreference: function(preference) {
			chosenPreference = preference;
		},
		getPreference: function() {
			return chosenPreference;
		}
	}
}]);
