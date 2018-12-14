'use strict';

/**
 * @ngdoc function
 * @name yummyStationApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the yummyStationApp
 */
angular.module('yummyStationApp')
	.controller('MenuCtrl', ['menuFetcher', function (menuFetcher) {
		const vm = this;

		menuFetcher.getMenu()
		.then(function(data) {
			vm.data = data;
		});
	}]);
