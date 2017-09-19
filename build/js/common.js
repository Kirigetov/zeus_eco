$(document).ready(function() {

	$("#play-video").mouseenter(function(){
	        $(this).addClass('hover-state');
	    }).mouseleave(function(){
	        $(this).removeClass('hover-state');
	    });

	    $("#play-video.video").click(function(e){
	    	e.preventDefault();
            var videoUrl = $(this).data("video");

	        $('#section-video').addClass('is-transparent');

	        player = new YT.Player('player', {
	            width : '100%',
	            height : '100%',
	            videoId : videoUrl,
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
            $('#section-video').removeClass('is-transparent');
        }
    }

    $('.js-lang').on('click touchend', function() {
        var parent = $(this).closest(".lang");

        if ( !parent.hasClass("is-open")) {
            parent.addClass("is-open");
        } else {
            parent.removeClass("is-open");
        }

    });

    $('.js-nav-link').on('click', function() {
        var section = $(this).attr('href');
        
        $('html, body').animate({
            scrollTop: $(section).offset().top - 10
        }, 500);

        $('.js-nav-btn').removeClass('is-active');

        return false;
    });

    $('.js-join-btn').on('click', function() {
        var popup = $('html, body').find('.popup');
        popup.addClass('is-open');
        $('body').addClass('popup-open');
    });

    $('.js-close-popup').on('click', function() {
    	var popup = $('html, body').find('.popup');
        popup.removeClass('is-open');
        $('body').removeClass('popup-open');
    });

    // scroll button
    $(".js-scroll-top").on("click", function(){
        $('html, body').animate({
            scrollTop: 0
        }, 100);
        return false;
    });

    var lastScrollTop = 0;
    $(window).scroll(function(event){
       var st = $(this).scrollTop();
       if (st > lastScrollTop){
            if (!$(".js-scroll-top").hasClass("is-visible")) {
                $(".js-scroll-top").addClass("is-visible");
            }

       } else {
        if ($(".js-scroll-top").hasClass("is-visible")) {
            $(".js-scroll-top").removeClass("is-visible");
        }
       }
       lastScrollTop = st;
    });
});