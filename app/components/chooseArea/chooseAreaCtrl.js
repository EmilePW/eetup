angular.module('eetup').controller('chooseAreaCtrl', ['$scope', 'LocationData', function($scope, LocationData) {
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