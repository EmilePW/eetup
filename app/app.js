angular.module('eetup', ['ngRoute', 'ngAnimate']);

angular.module('eetup')
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider

		// Landing page
		.when('/', {
			templateUrl: 'components/home/home.html',
			controller: 'homeCtrl'
		})

		.when('/chooseTime', {
			templateUrl: 'components/chooseTime/chooseTime.html',
			controller: 'chooseTimeCtrl'
		})

		.when('/chooseMethod', {
			templateUrl: 'components/chooseMethod/chooseMethod.html',
			controller: 'chooseMethodCtrl'
		})

		.when('/chooseArea', {
			templateUrl: 'components/chooseArea/chooseArea.html',
			controller: 'chooseAreaCtrl'
		})

		.when('/choosePreference', {
			templateUrl: 'components/choosePreference/choosePreference.html',
			controller: 'choosePreferenceCtrl'
		})

		.when('/choosePeople', {
			templateUrl: 'components/choosePeople/choosePeople.html',
			controller: 'choosePeopleCtrl'
		})

		// Vote page
		.when('/vote', {
			templateUrl: 'components/vote/vote.html',
			controller: 'voteCtrl'
		})

		.when('/waiting', {
			templateUrl: 'components/waiting/waiting.html',
			controller: 'waitingCtrl'
		})

		.when('/booked', {
			templateUrl: 'components/booked/booked.html',
			controller: 'bookedCtrl'
		})

		.when('/map', {
			templateUrl: 'components/map/map.html',
			controller: 'mapCtrl'
		})

		.otherwise({
			redirectTo: '/'
		})
}]);