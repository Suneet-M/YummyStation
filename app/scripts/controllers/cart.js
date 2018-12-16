'use strict';

/**
 * @ngdoc function
 * @name yummyStationApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the yummyStationApp
 */
angular.module('yummyStationApp')
	.controller('CartCtrl', ['cartManager', function (cartManager) {
		this.orders = cartManager.getCart();
		this.listLength = Object.keys(this.orders).length;
	}]);
