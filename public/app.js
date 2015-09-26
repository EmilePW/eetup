angular.module('eetup', ['ngRoute']);

angular.module('eetup')
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider

		// Landing page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'homeCtrl'
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