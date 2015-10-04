angular.module('eetup').controller('choosePreferenceCtrl', ['$scope', 'PreferenceData', function($scope, PreferenceData) {
	$scope.allPreferences = {
		restaurants: [
			{
				name: "Veg",
				value: "Veg"
			},
			{
				name: "Heavy",
				value: "Burger"
			},
			{
				name: "Protein",
				value: "Chicken"
			},
			{
				name: "Vegan",
				value: "Vegan"
			},
			{
				name: "Spicy",
				value: "Indian"
			},
			{
				name: "Junk",
				value: "Fast Food"
			},
			{
				name: "Themed",
				value: "Pop up"
			}
		],
		bars: [
			{
				name: 'Craft Beers'
			},
			{
				name: 'Wine Bars'
			},
			{
				name: 'Bottle Service'
			},
			{
				name: 'English Pubs'
			},
			{
				name: 'High Society'
			},
			{
				name: 'Bubbly'
			},
			{
				name: 'Virgin'
			}
		]
	};

	$scope.preferenceList = $scope.allPreferences[PreferenceData.getType()];

	$scope.savePreference = function(preference) {
		PreferenceData.savePreference(preference);
	}
}]);