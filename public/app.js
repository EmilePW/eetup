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
			controller: 'bookCtrl'
		})

		.otherwise({
			redirectTo: '/'
		})
}]);



angular.module('eetup').controller('waitingCtrl', ['$scope', '$http', function($scope, $http) {
	setTimeout(function(){ 
		window.location.href = "#/booked";
	}
	, 3000);
	

	// $scope.timerRunning = true;
 
 //            $scope.startTimer = function (){
 //                $scope.$broadcast('timer-start');
 //                $scope.timerRunning = true;
 //            };
 
 //            $scope.stopTimer = function (){
 //                $scope.$broadcast('timer-stop');
 //                $scope.timerRunning = false;
 //            };
 
 //            $scope.$on('timer-stopped', function (event, data){
 //                console.log('Timer Stopped - data = ', data);
 //            });

 //            $scope.startTimer();
	
}]);


angular.module('eetup').controller('voteCtrl', ['$scope', '$http', function($scope, $http) {
	console.log('hi');
	var apiBase = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?';
	var apiKey = 'AIzaSyAhrpJJsHSTRNx599sBusUnK6EqXote1dk';
	var apiOptions = {
		location: '-33.8670,151.1957',
		radius: 500,
		types: 'food'
	};
	var apiLink = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?callback=JSON_CALLBACK&location=-33.8670,151.1957&radius=500&types=food&name=cruise&key=' + apiKey;

	// $.getJSON( apiLink, function( data ) {
	//   console.log(data);
	// });

	// $.ajax({
	//     type: 'GET',
	//     url: apiLink,
	//     async: false,
	//     contentType: "application/json",
	//     dataType: 'jsonp',
	//     success: function(json) {
	//     	console.log('entered');
	//     	console.log(json);
	//     },
	//     error: function(e) {
	//        console.log(e.message);
	//     }
	// });

	// $http.jsonp(apiLink)
	// 	.success(function(response){
	// 		console.log(response);
	// 	})
	// 	.error(function(e){
	// 		console.log('error');
	// 	});


		// $http.jsonp(apiLink).then(
	 //        function(s) { $scope.success = JSON.stringify(s); }, 
	 //        function(e) { $scope.error = JSON.stringify(e); } );
		// }

		// $scope.function jsonp_callback(data) {
		//     var el = document.getElementById('ctl');
		//     var scope = angular.element(el).scope();
		//     scope.$apply(function() {
		//         scope.data = JSON.stringify(data);
		//     });
		// }






	console.log('hi');
}]);