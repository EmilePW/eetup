angular.module('eetup').factory('LocationData', ['$http', function($http) {
	var chosenArea;

	return {
		saveArea: function(area) {
			chosenArea = area;
		},
		getArea: function() {
			return chosenArea;
		}
	}
}]);