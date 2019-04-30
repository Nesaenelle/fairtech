$(document).ready(function() {
    var index = 0;
    var length = $('[data-project]').length;
    window.addEventListener("mousewheel", function(event) {
      
        if (event.wheelDelta > 0 || event.detail < 0) {
            // Scroll up

            goUp();
        } else {
            // Scroll down

            goDown();
        }
    }, false);

    function goUp() {
    	var height = window.innerHeight;
        index--
        if (index <= 0) {
            index = 0;
        }


        $('.scroller').css('transform', 'translateY(' + height * index + 'px)');
    }

    function goDown() {
    	var height = window.innerHeight;
        index++;
        if (index >= length - 1) {
            index = length - 1;
        }


        $('.scroller').css('transform', 'translateY(' + (-height * index) + 'px)');
    }


    var ts;
    $(document).bind('touchstart', function(e) {
        ts = e.originalEvent.touches[0].clientY;
    });

    $(document).bind('touchend', function(e) {
        var te = e.originalEvent.changedTouches[0].clientY;
        if (ts > te + 5) {
            goDown();
        } else if (ts < te - 5) {
            goUp();
        }
    });

    $(window).bind('resize', function(e) {
        var height = window.innerHeight;
        $('.scroller').css('transform', 'translateY(' + (-height * index) + 'px)');
    });


});