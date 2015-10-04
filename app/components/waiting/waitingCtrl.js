angular.module('eetup').controller('waitingCtrl', ['$scope', '$http', function($scope, $http) {
	for (var i = 1; i <= 10; i++) {
	    (function(index) {
	        setTimeout(function() { 
	        	$('#timer').text('1:59:5' + (10 - index));
	        }, i * 1000);
	    })(i);
	}

	setTimeout(function(){ 
		window.location.href = "#/booked";
	}
	, 11000);
}]);