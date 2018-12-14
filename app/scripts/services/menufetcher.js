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
			return $.get('/data/menu.json');
		};

	});
