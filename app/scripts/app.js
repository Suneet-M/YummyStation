'use strict';

/**
 * @ngdoc overview
 * @name yummyStationApp
 * @description
 * # yummyStationApp
 *
 * Main module of the application.
 */
angular
	.module('yummyStationApp', ['ui.router'])
	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'views/main.html',
			controller: 'MainCtrl'
		})
		.state('menu', {
			url: '/Menu',
			templateUrl: 'views/menu.html',
			controller: 'MenuCtrl as menu',
			resolve: {
				menu: ['menuFetcher', function(menuFetcher) {
					return menuFetcher.getMenu();
				}]
			}
		})
		.state('item', {
			url: '/Menu/Items/:type/:id',
			templateUrl: 'views/item.html',
			controller: 'ItemCtrl as item',
			resolve: {
				item: ['itemFetcher', '$stateParams', function(itemFetcher, params) {
					return itemFetcher.getItem(params.id);
				}]
			}
		})
		.state('cart', {
			url: '/cart',
			templateUrl: 'views/cart.html',
			controller: 'CartCtrl as cart'
		});
	}]);
