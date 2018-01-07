'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webApp
 */
app.controller('MainCtrl', function (ModalService) {
	this.show = function(Id){
		ModalService.showModal({
			templateUrl: 'views/modal.html',
			controller: 'ModalCtrl as ctrl',
			inputs: {
				Id: Id
			}
		}).then(function(modal) {
			modal.element.modal({
				backdrop: 'static',	
				keyboard: false
			});
			modal.close.then(function(result) {
			})
		})
	}

});