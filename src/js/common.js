
$(document).ready(function() {

    const section = $("#section-video");
    const video = section.find($('.video-js'));
    const player = videojs(video[0]);

    $("#play-video").mouseenter(function(){
        $(this).addClass('hover-state');
    }).mouseleave(function(){
        $(this).removeClass('hover-state');
    });

    player.on(['play', 'playing'], function () {
      section.addClass('is-transparent is-play');
    });

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

    $(".popup").on("click", function (e) {
        if ($(e.target).closest('.js-popup-inner').length) return;
        $(".popup").removeClass('is-open');
        $('body').removeClass('popup-open');
    })

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