$(document).ready(function() {

	$("#play-video").mouseenter(function(){
	        $(this).addClass('hover-state');
	    }).mouseleave(function(){
	        $(this).removeClass('hover-state');
	    });

	    $("#play-video.video").click(function(e){
	    	e.preventDefault();

	        $('#head').addClass('is-transparent');

	        player = new YT.Player('player', {
	            width : '100%',
	            height : '100%',
	            videoId : 'wer1t1nFOPY',
	            playerVars: { 'autoplay': 1 },
	            events : {
	                'onReady' : onPlayerReady,
	                'onStateChange' : onPlayerStateChange
	            }
	        });
	    });

    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player;
    function onPlayerReady(event) {
        //event.target.playVideo();
    }
    function onPlayerStateChange(event) {
        if(event.data == YT.PlayerState.ENDED) {
            player.destroy();
            $('#head').removeClass('is-transparent');
        }
    }

});