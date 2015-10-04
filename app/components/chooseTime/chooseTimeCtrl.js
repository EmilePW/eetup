angular.module('eetup').controller('chooseTimeCtrl', ['$scope', 'TimeData', function($scope, TimeData) {
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