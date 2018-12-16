'use strict';

/**
 * @ngdoc function
 * @name yummyStationApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the yummyStationApp
 */
angular.module('yummyStationApp')
	.controller('MenuCtrl', function(menu, cartManager) {
		console.log('Menu received');
		this.data = menu;

		this.selectItem = function(foodType, foodItem) {
			cartManager.addToCart(foodType, foodItem);
		};
	});