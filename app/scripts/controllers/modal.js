'use strict';

angular.module('webApp').controller('ModalCtrl', function($sce, $scope, close, video, thumbnail) {

  this.close = function(result) {
    close(result, 500);
  };

  /*this.check = function(){
    console.log(Id)
  }
*/
  this.config = {
    sources: [
    {src: $sce.trustAsResourceUrl('https://onedrive.live.com/download?cid='+video), type: 'video/mp4'}
    ],
    plugins: {
      poster: thumbnail
    }
  };

});  


