angular.module('eetup').controller('voteCtrl', ['$scope', 'LocationData', 'PreferenceData', 'PlaceData', function($scope, LocationData, PreferenceData, PlaceData) {
	$scope.placeCandidates = [];

	$scope.findPlaces = function() {
		var map;
		var service;
		var infowindow;
		var chosenLocation = LocationData.getArea().location;
		var chosenPreference = PreferenceData.getPreference().value;
		var chosenType = PreferenceData.getType();

		function initialize() {
		  console.log(chosenLocation);
		  var theLocation = new google.maps.LatLng(chosenLocation.latitude, chosenLocation.longitude);

		  map = new google.maps.Map(document.getElementById('map'), {
		      center: theLocation,
		      zoom: 14
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
		    	var marker = new google.maps.Marker({
		          map: map,
		          position: $scope.placeCandidates[i].geometry.location
		        });

		        console.log($scope.placeCandidates[i]);
		        if(!$scope.placeCandidates[i].rating) {
		        	$scope.placeCandidates[i].rating = 3.8;
		        }
		    }
		  }
		}

		initialize();
	}

	$scope.findPlaces();



	$scope.savePlace = function(place) {
		PlaceData.savePlaceName(place);
	}

	$scope.saveThePlace = function(place) {
		PlaceData.savePlace(place);
	}
	
}]);