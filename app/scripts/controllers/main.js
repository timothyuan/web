'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webApp
 */
angular.module('webApp').controller('MainCtrl', function (ModalService) {
	this.show = function(video,thumbnail){
		ModalService.showModal({
			templateUrl: 'views/modal.html',
			controller: 'ModalCtrl as ctrl',
			inputs: {
				video: video,
				thumbnail: thumbnail
			}
		}).then(function(modal) {
			modal.element.modal({
				backdrop: 'static',	
				keyboard: false
			});
			modal.close.then(function(result) {
				console.log(result);
			});
		});
	};
});