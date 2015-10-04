angular.module('eetup').factory('PlaceData', ['$http', function($http) {
	var placeCandidates = [];

	var chosenPlaceName = 'Dishooms';
	var chosenPlace;

	return {
		savePlaceName: function(place) {
			chosenPlaceName = place.name;
		},
		savePlace: function(place) {
			chosenPlace = place;
		},
		getPlaceName: function() {
			return chosenPlaceName;
		},
		getPlace: function() {
			return chosenPlace;
		}
	}
}]);