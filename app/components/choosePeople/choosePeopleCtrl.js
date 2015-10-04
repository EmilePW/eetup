angular.module('eetup').controller('choosePeopleCtrl', ['$scope', function($scope) {
	$scope.visible = true;

	$scope.showInput = function() {
		$scope.visible ? $scope.visible = false : $scope.visible = true;
	}

	$scope.personTel;

	$scope.possibleAttendees = [
		{
			name: "Fifi",
			picture: "images/fifi.jpg",
			number: 07798121991,
			location: ""
		},
		{
			name: "David",
			picture: "images/david.jpg",
			number: 2,
			location: ""
		},
		{
			name: "Richard",
			picture: "images/richard.jpg",
			number: 3,
			location: ""
		},
		{
			name: "Viraj",
			picture: "images/viraj.jpg",
			number: 4,
			location: ""
		},
		{
			name: "Emile",
			picture: "images/emile.jpg",
			number: 5,
			location: ""
		}
	];

	$scope.attendees = [$scope.possibleAttendees[4]];


	$scope.addPerson = function() {
		for(var i = 0; i < $scope.possibleAttendees.length; i++) {
			if($scope.personTel == $scope.possibleAttendees[i].number) {
				$scope.attendees.push($scope.possibleAttendees.splice(i, 1)[0]);
			}
		}

		$scope.personTel = '';
	}

	$scope.showInput();

}]);