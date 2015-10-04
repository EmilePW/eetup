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