'use strict';

/**
 * @ngdoc service
 * @name yummyStationApp.itemFetcher
 * @description
 * # itemFetcher
 * Service in the yummyStationApp.
 */
angular.module('yummyStationApp')
  .service('itemFetcher', function () {

  	this.getItem = function(id) {
  		console.log('Getting dish');
		return $.get('data/' + id + '.json');
  	};

  });
