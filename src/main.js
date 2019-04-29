$(document).ready(function () {

    var toggleLightBtn = $('[data-toggle-light]');

    toggleLightBtn.on('click', function () {
        $('body').toggleClass('on');
    });

    var $lamp = $('.lamp');

    function blink() {
        var random = randomInteger(1, 5);
        setTimeout(function () {
            $lamp.addClass('blink');

            setTimeout(function () {
                blink();

                $lamp.removeClass('blink');
            }, 100);
        }, random * 1000);
    }

    function randomInteger(min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1)
        rand = Math.round(rand);
        return rand;
    }


    blink();

    $('input').on('blur', function() {
        var body = $("html, body");
        body.stop().animate({ scrollTop: 0 }, 100);
    });

    $('#main-form').on('submit', function (e) {
        e.preventDefault();
        var data = $(e.target).serializeArray();
        
    });

})