app.controller('ModalCtrl', function($sce, $scope, close, Id) {

  this.close = function(result) {
    close(result, 500)
  }

  /*this.check = function(){
    console.log(Id)
  }
*/
  this.config = {
    sources: [
    {src: $sce.trustAsResourceUrl('res/videos/'+Id+'.mp4'), type: 'video/mp4'}
    ],
    theme: 'bower_components/videogular-themes-default/videogular.css',
    plugins: {
      poster: 'res/thumbnails/'+Id+'.jpg'
    }
  };

});  