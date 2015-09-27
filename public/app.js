angular.module('eetup', ['ngRoute', 'ngAnimate']);

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

		.when('/chooseMethod', {
			templateUrl: 'views/chooseMethod.html',
			controller: 'chooseMethodCtrl'
		})

		.when('/areaChoose', {
			templateUrl: 'views/areaChoose.html',
			controller: 'areaChooseCtrl'
		})

		.when('/choosePreference', {
			templateUrl: 'views/choosePreference.html',
			controller: 'choosePreferenceCtrl'
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

		.when('/waiting', {
			templateUrl: 'views/waiting.html',
			controller: 'waitingCtrl'
		})

		.when('/booked', {
			templateUrl: 'views/booked.html',
			controller: 'bookedCtrl'
		})

		.otherwise({
			redirectTo: '/'
		})
}]);

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

angular.module('eetup').factory('PlaceData', ['$http', function($http) {
	var placeCandidates = [];

	return 0;
}]);

angular.module('eetup').controller('homeCtrl', ['$scope', 'PreferenceData', function($scope, PreferenceData) {
	$scope.types = [
		{
			name: 'We want to eat',
			value: 'restaurants'
		},
		{
			name: 'We want to drink',
			value: 'bars'
		}
	];

	$scope.saveType = function(type) {
		PreferenceData.saveType(type.value);
	}
}]);

angular.module('eetup').controller('timeCtrl', ['$scope', 'TimeData', function($scope, TimeData) {
	$scope.getTimes = function(timeNow) {
		var times = [];
		for(var i = timeNow; i < 24; i = i + 0.5) {
			var minutes = i === Math.floor(i) ? '00' : '30';
			var hours = i < 10 ? '0' + Math.floor(i) : Math.floor(i);
			times.push(hours + ':' + minutes);
		}

		return times;
	}

	$scope.currentIndex = 0;

	$scope.nextIndex = function() {
		$scope.currentIndex = ($scope.currentIndex + 1) % $scope.times.length;
	}

	$scope.prevIndex = function() {
		$scope.currentIndex === 0 ? 
			$scope.currentIndex = $scope.times.length - 1 :		
			$scope.currentIndex = ($scope.currentIndex - 1) % $scope.times.length;
	}

	$scope.date = new Date;

	$scope.timeNow = $scope.date.getUTCHours() + 1;

	console.log($scope.timeNow);

	$scope.times = $scope.getTimes($scope.timeNow + 1);

	$scope.saveTime = function(time) {
		TimeData.saveTime(time);
	}


}]);

angular.module('eetup').controller('areaChooseCtrl', ['$scope', 'LocationData', function($scope, LocationData) {
	$scope.areas = [
		{
			name: 'Soho',
			location: {
				latitude: 51.5131702,
				longitude: -0.1355637
			}
		},
		{
			name: 'Covent Garden',
			location: {
				latitude: 51.512519,
				longitude: -0.1270915
			}
		},
		{
			name: 'Mayfair',
			location: {
				latitude: 51.5092462,
				longitude: -0.1471057
			}
		},
		{
			name: 'Shoreditch',
			location: {
				latitude: 51.52849,
				longitude: -0.084728
			}
		},
		{
			name: 'Southbank',
			location: {
				latitude: 51.5057798,
				longitude: -0.1166921
			}
		},
		{
			name: 'Brick Lane',
			location: {
				latitude: 51.5220028,
				longitude: -0.0717137
			}
		},
		{
			name: 'Holborn',
			location: {
				latitude: 51.5172934,
				longitude: -0.1184131
			}
		}
	];

	$scope.saveArea = function(area) {
		LocationData.saveArea(area);
	}
	
}]);

angular.module('eetup').controller('choosePreferenceCtrl', ['$scope', 'PreferenceData', function($scope, PreferenceData) {
	$scope.allPreferences = {
		restaurants: [
			{
				name: "Veg"
			},
			{
				name: "Heavy"
			},
			{
				name: "Protein"
			},
			{
				name: "Vegan"
			},
			{
				name: "Spicy"
			},
			{
				name: "Junk"
			},
			{
				name: "Themed"
			}
		],
		bars: [
			{
				name: 'Craft Beers'
			},
			{
				name: 'Wine Bars'
			},
			{
				name: 'Bottle Service'
			},
			{
				name: 'English Pubs'
			},
			{
				name: 'High Society'
			},
			{
				name: 'Bubbly'
			},
			{
				name: 'Virgin'
			}
		]
	};

	$scope.preferenceList = $scope.allPreferences[PreferenceData.getType()];

	$scope.savePreference = function(preference) {
		PreferenceData.savePreference(preference);
	}
}]);

angular.module('eetup').controller('addPeopleCtrl', ['$scope', function($scope) {
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
			number: 07798121992,
			location: ""
		},
		{
			name: "Richard",
			picture: "images/richard.jpg",
			number: 07798121993,
			location: ""
		},
		{
			name: "Viraj",
			picture: "images/viraj.jpg",
			number: 07798121994,
			location: ""
		},
		{
			name: "Emile",
			picture: "images/emile.jpg",
			number: 07798121995,
			location: ""
		}
	];

	$scope.attendees = [];


	$scope.addPerson = function() {
		for(var i = 0; i < $scope.possibleAttendees.length; i++) {
			if($scope.personTel == $scope.possibleAttendees[i].number) {
				$scope.attendees.push($scope.possibleAttendees.splice(i, 1)[0]);
			}
		}

		$scope.personTel = '';
	}

}]);

angular.module('eetup').controller('voteCtrl', ['$scope', 'LocationData', 'PreferenceData', function($scope, LocationData, PreferenceData) {
	$scope.placeCandidates = [];

	$scope.findPlaces = function() {
		var map;
		var service;
		var infowindow;
		var chosenLocation = LocationData.getArea().location;
		var chosenPreference = PreferenceData.getPreference().name;
		var chosenType = PreferenceData.getType();

		function initialize() {
		  console.log(chosenLocation);
		  var theLocation = new google.maps.LatLng(chosenLocation.latitude, chosenLocation.longitude);

		  map = new google.maps.Map(document.getElementById('map'), {
		      center: theLocation,
		      zoom: 15
		    });

		  var request = {
		    location: theLocation,
		    radius: '500',
		    query: chosenPreference + ' ' + chosenType
		  };

		  service = new google.maps.places.PlacesService(map);
		  service.textSearch(request, callback);
		}

		function callback(results, status) {
		  if (status == google.maps.places.PlacesServiceStatus.OK) {
		    for (var i = 0; i < results.length; i++) {
		      var place = results[i];
		    }

		    for(var i = 0; i < 3; i++) {
		    	var randomNum = Math.floor(Math.random() * results.length);
		    	$scope.placeCandidates.push(results.splice(randomNum, 1)[0]);
		    }
		  }
		}

		initialize();
	}

	$scope.findPlaces();
	
}]);

angular.module('eetup').controller('waitingCtrl', ['$scope', '$http', function($scope, $http) {
	setTimeout(function(){ 
		$('#timer').text('1:59:59');
	}
	, 1000);
	setTimeout(function(){ 
		$('#timer').text('1:59:58');
	}
	, 2000);
	setTimeout(function(){ 
		$('#timer').text('1:59:57');
	}
	, 3000);
	setTimeout(function(){ 
		$('#timer').text('1:59:56');
	}
	, 4000);
	setTimeout(function(){ 
		$('#timer').text('1:59:55');
	}
	, 5000);
	setTimeout(function(){ 
		window.location.href = "#/booked";
	}
	, 6000);
}]);

// Restaurant booked controller
angular.module('eetup').controller('bookedCtrl', ['$scope', 'TimeData', function($scope, TimeData) {
	var chosenTime = TimeData.getTime();

	$scope.chosenTime = chosenTime;

}]);

