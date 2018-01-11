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
    {src: $sce.trustAsResourceUrl('https://github.com/timothyuan/web/blob/gh-pages/res/videos/'+Id+'.mp4?raw=true'), type: 'video/mp4'}
    ],
    plugins: {
      poster: 'https://github.com/timothyuan/web/blob/gh-pages/res/thumbnails/'+Id+'.jpg?raw=true'
    }
  };

});  