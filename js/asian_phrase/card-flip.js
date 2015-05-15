/**
 * Do the clicking stuff
 *
 */

(function() {
  var cards = document.querySelectorAll(".card.flip");
    var goback = document.getElementById("goback");
  for ( var i  = 0, len = cards.length; i < len; i++ ) {
    var card = cards[i];
    clickListener( card );
  }

function clickListener(goback) {
goback.addEventListener( "click", function() {
      var c = this.classList;
      c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
    });
  }  
})();

$('.card-back ul li').click(false);

$(document).on("click",".card.flip",function(){
  if ($(this).hasClass("flipped")) {
    $(".card.flip.flipped").removeClass("flipped");
    $(this).addClass("flipped");
  }
});

function playAudio(aud){
		var audioPlayer = document.getElementById("audioPlayer");
		audioPlayer.src=aud;
		audioPlayer.play();
        document.querySelectorAll("audio").style.color = "green" ;
		//niftyplayer('bgAudio').loadAndPlay(aud);
	
}
