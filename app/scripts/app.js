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
			url: '/menu',
			templateUrl: 'views/menu.html',
			controller: 'MenuCtrl as menu'
		})
		.state('item', {
			url: '/menu/item/:id',
			templateUrl: 'views/item.html',
			controller: 'ItemCtrl as item'
		});
	}]);
