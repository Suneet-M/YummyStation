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
		});
	}]);
