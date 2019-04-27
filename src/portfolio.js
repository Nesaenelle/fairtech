
$(document).ready(function () {

    var $sliderInfo = $('.slider__info');
    var $goTop = $('.go-top');

    $(".slick").on("init", function (event, slider) {
        var curSlide = slider.$slides[0];
        changeSliderInfo(curSlide);
    });

    $('.slick').slick({
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        dots: true,
        prevArrow: ".slider .slider__prev",
        nextArrow: ".slider .slider__next",
        appendDots: ".slider .slider__dots"
    });

    $(".slick").on("beforeChange", function (event, slider, slideIndex, nextSlide) {
        var curSlide = slider.$slides[nextSlide]
        changeSliderInfo(curSlide);
    });

    function changeSliderInfo (curSlide) {
        var title = $(curSlide).data('title');
        var subtitle = $(curSlide).data('subtitle');
        var date = $(curSlide).data('date');

        $sliderInfo.find('.slider__info--title').text(title);
        $sliderInfo.find('.slider__info--subtitle').text(subtitle);
        $sliderInfo.find('.slider__info--date').text(date);
    }


    $('.go-top').on('click', function () {
        var body = $("html, body");
        body.stop().animate({ scrollTop: 0 }, 1000);
    });
    $(window).on('scroll', function() {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
        top >= 300 ? $goTop.addClass('visible') : $goTop.removeClass('visible');
    });

});