'use strict';

/**
 * @ngdoc function
 * @name yummyStationApp.controller:ItemCtrl
 * @description
 * # ItemCtrl
 * Controller of the yummyStationApp
 */
angular.module('yummyStationApp')
	.controller('ItemCtrl', function(item) {
		console.log('Dish received');
		this.data = item;
	});
