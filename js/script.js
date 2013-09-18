var sp = getSpotifyApi();
var models = sp.require('$api/models');
var views = sp.require("$api/views");
var player = models.player;
function checkIfPitbull() {
   var playerTrackInfo = player.track;
   if (playerTrackInfo == null) {
      return null;
   } else {
      for (var i = 0; i < playerTrackInfo.artists.length; i++) {
        if(playerTrackInfo.artists[i].name == 'Pitbull'){
            player.playTrack('spotify:track:550O6jqrLXRjh2yhhpISGv');
                localStorage.pitbullPlays++;
                document.getElementById("plays").innerHTML=localStorage.pitbullPlays;
        }
      }
   }
}

player.observe(models.EVENT.CHANGE, function(event) {
    if(event.data.playstate){
        checkIfPitbull();
    }
});

if(localStorage.pitbullPlays == undefined){
    localStorage.pitbullPlays = 0;
}