'use strict';

/**
 * @ngdoc function
 * @name yummyStationApp.controller:ItemCtrl
 * @description
 * # ItemCtrl
 * Controller of the yummyStationApp
 */
angular.module('yummyStationApp')
	.controller('ItemCtrl', ['$stateParams', 'itemFetcher', function (params, itemFetcher) {

		const vm = this,
		id = params.id;

		itemFetcher.getItem(id)
		.then(function(item) {
			console.log('Dish received');
			vm.data = item;
		});
	}]);
