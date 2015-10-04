// Restaurant booked controller
angular.module('eetup').controller('bookedCtrl', ['$scope', 'TimeData', 'PlaceData', function($scope, TimeData, PlaceData) {
	var chosenTime = TimeData.getTime();
	var chosenPlaceName = PlaceData.getPlaceName();

	$scope.chosenTime = chosenTime;
	$scope.chosenPlaceName = chosenPlaceName;

}]);