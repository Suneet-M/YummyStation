'use strict';

/**
 * @ngdoc service
 * @name yummyStationApp.menuFetcher
 * @description
 * # menuFetcher
 * Service in the yummyStationApp.
 */
angular.module('yummyStationApp')
	.service('menuFetcher', function () {

		this.getMenu = function() {
			console.log('Getting menu data');
			return $.get('data/menu.json');
		};

	});
