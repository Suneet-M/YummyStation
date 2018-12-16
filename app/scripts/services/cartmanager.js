'use strict';

/**
 * @ngdoc service
 * @name yummyStationApp.cartManager
 * @description
 * # cartManager
 * Service in the yummyStationApp.
 */
angular.module('yummyStationApp')
	.service('cartManager', function () {
		this.orderList = {};

		this.addToCart = function(foodType, foodItem) {
			if(!this.orderList[foodType]) {
				this.orderList[foodType] = [];
			}
			this.orderList[foodType].push(foodItem);
			console.log('New order added');
		};

		this.getCart = function() {
			console.log('Getting orders');
			return this.orderList;
		};

	});
