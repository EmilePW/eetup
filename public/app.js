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

		.otherwise({
			redirectTo: '/'
		})
}]);

angular.module('eetup').controller(['$scope', function($scope) {

}]);