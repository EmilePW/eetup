angular.module('eetup').factory('TimeData', ['$http', function($http) {
	var chosenTime;

	return {
		saveTime: function(time) {
			chosenTime = time;
			console.log(chosenTime);
		},
		getTime: function() {
			return chosenTime;
		}
	}
}]);
