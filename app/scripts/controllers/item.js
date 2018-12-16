'use strict';

/**
 * @ngdoc function
 * @name yummyStationApp.controller:ItemCtrl
 * @description
 * # ItemCtrl
 * Controller of the yummyStationApp
 */
angular.module('yummyStationApp')
	.controller('ItemCtrl', ['item', '$stateParams', 'cartManager', function(item, $stateParams, cartManager) {
		console.log('Dish received');
		this.data = item;
		this.foodType = $stateParams.type;
		this.selectItem = function(foodItem) {
			cartManager.addToCart(this.foodType, foodItem);
		};
	}]);
