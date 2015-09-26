angular.module('eetup', ['ngRoute']);

angular.module('eetup')
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider

		// Landing page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'homeCtrl'
		})


		.when('/time', {
			templateUrl: 'views/time.html',
			controller: 'timeCtrl'
		})

		.when('/addpeople', {
			templateUrl: 'views/addpeople.html',
			controller: 'addPeopleCtrl'
		})

		// Vote page
		.when('/vote', {
			templateUrl: 'views/vote.html',
			controller: 'voteCtrl'
		})

		.otherwise({
			redirectTo: '/'
		})
}]);

angular.module('eetup').controller('timeCtrl', ['$scope', function($scope) {
	$scope.getTimes = function(timeNow) {
		var times = [];
		for(var i = timeNow; i <= 24; i = i + 0.5) {
			var minutes = i === Math.floor(i) ? '00' : '30';
			var hours = i < 10 ? '0' + Math.floor(i) : Math.floor(i);
			times.push(hours + ':' + minutes);
		}

		console.log(times);
		return times;
	}

	$scope.currentIndex = 0;

	$scope.nextIndex = function() {
		$scope.currentIndex++;
	}

	$scope.prevIndex = function() {
		$scope.currentIndex--;
	}

	$scope.times = $scope.getTimes(0);


}]);

angular.module('eetup').controller('addPeopleCtrl', ['$scope', function($scope) {
	console.log('heelo');
	$scope.visible = true;

	$scope.showInput = function() {
		$scope.visible ? $scope.visible = false : $scope.visible = true;
	}

	$scope.possibleAttendees = [
		{
			name: "Fifi",
			picture: "images/fifi.jpg",
			number: 1,
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

	$scope.attendees = $scope.possibleAttendees;
}]);