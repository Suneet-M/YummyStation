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

		//Used to check if the user has added any orders, only then display the list of orders
		this.listLength = Object.keys(this.orders).length;

		//Reduce or remove item as per count value
		this.removeItem = function(foodType, item, count) {
			if (count > 1) {
				cartManager.reduceInCart(foodType, item);
			} else {
				cartManager.removeFromCart(foodType, item);
			}
		};
	}]);
