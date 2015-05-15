var originPhrase = "";

function showPhrase(mouse, isRevert){
	if(!isRevert){
		if(originPhrase!=""){
			$("#phrase").html(originPhrase);
		}
	}
	var _s = $(".phrase li",$(mouse)).size();
	$(".mouse").children(".mouse_notice").css({"display":"none"});
	$(".mouse").children("ul").css({"display":"none"});
	$(mouse).children(".mouse_notice").css({"display":"block"});
	$(mouse).children(".phrase").css({"top":"-"+_s*32+"px","display":"block"});
}

function getPhraseList(phraseLi,_id){
	originPhrase = $(phraseLi).parent(".phrase").html();
	var _n_s = $("li",$("#"+_id)).size();
	$(phraseLi).parent(".phrase").html($("#"+_id).html()).css({"top":"-"+_n_s*32+"px"});
}

function playAudio(aud){
	
		var audioPlayer = document.getElementById("audioPlayer");
		audioPlayer.src=aud;
		audioPlayer.play();
		//niftyplayer('bgAudio').loadAndPlay(aud);
	
}
