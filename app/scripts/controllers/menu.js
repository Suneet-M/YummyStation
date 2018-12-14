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
			console.log('Menu received');
			vm.data = data;
		});
	}]);
