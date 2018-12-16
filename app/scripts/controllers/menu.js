'use strict';

/**
 * @ngdoc function
 * @name yummyStationApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the yummyStationApp
 */
angular.module('yummyStationApp')
	.controller('MenuCtrl', function(menu) {
		console.log('Menu received');
		this.data = menu;
	});