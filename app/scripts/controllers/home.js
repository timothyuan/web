'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webApp
 */
angular.module('webApp').controller('HomeCtrl', function ($window) {
	this.open = function(url){
		//console.log(url);
		$window.open(url, '_blank');
	};
});