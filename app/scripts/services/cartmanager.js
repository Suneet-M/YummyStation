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
			let count, //For number of orders of same dish
			//Assign to a variable for ease of typing
			foodTypeInOrderList = this.orderList[foodType];

			//Create a key for the food type if it doesn't exist already
			if(!foodTypeInOrderList) {
				foodTypeInOrderList = {};
			}

			//Checks if the food item is already added to orders, then increases the count
			if(foodTypeInOrderList[foodItem]) {
				count = foodTypeInOrderList[foodItem];
				count++;
			} else {
				count = 1;
			}

			foodTypeInOrderList[foodItem] = count;

			//Passing the update back to orderList
			this.orderList[foodType] = foodTypeInOrderList;
			console.log('New order added');
		};

		this.reduceInCart = function(foodType, item) {
			this.orderList[foodType][item] -= 1;
		};

		this.removeFromCart = function(foodType, item) {
			delete this.orderList[foodType][item];

			//Check if the food type has no orders left and delete it
			if ($.isEmptyObject(this.orderList[foodType])) {
				delete this.orderList[foodType];
			}
		};

		this.getCart = function() {
			console.log('Getting orders');
			return this.orderList;
		};

	});
