angular.module('eetup').controller('mapCtrl', ['$scope', 'PlaceData', function($scope, PlaceData) {
	$scope.currentLocation = {
		latitude: 51.5180041,
		longitude: -0.0908493
	};

	$scope.makeMap = function() {
		var directionsService = new google.maps.DirectionsService;
		var directionsDisplay = new google.maps.DirectionsRenderer;
		var mapCanvas = document.getElementById('map');
        var mapOptions = {
          center: new google.maps.LatLng(
          	$scope.currentLocation.latitude,
          	$scope.currentLocation.longitude
          ),
          zoom: 18,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);
        directionsDisplay.setMap(map);

    	$scope.findDirections(directionsService, directionsDisplay);
    }

    $scope.findDirections = function(directionsService, directionsDisplay) {
    	var dest = {
    		latitude: 51.5480041,
			longitude: -0.1208493
    	};


    	var request = {
    		origin: new google.maps.LatLng(
	        	$scope.currentLocation.latitude,
	          	$scope.currentLocation.longitude
	        ),
    		destination: new google.maps.LatLng(
    			dest.latitude,
    			dest.longitude
    		),
    		travelMode: google.maps.TravelMode.WALKING
    	}

    	directionsService.route(request, function(response, status) {
			if (status === google.maps.DirectionsStatus.OK) {
				console.log(response);
				directionsDisplay.setDirections(response);
			} else {
				console.log(status);
			}
		});
    }

    $scope.makeMap();
}]);
