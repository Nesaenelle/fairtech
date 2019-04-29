$(document).ready(function() {
	var index = 0;
	var length = $('[data-project]').length;
    window.addEventListener("mousewheel", function(event) {
    	var height = window.innerHeight;
        if (event.wheelDelta > 0 || event.detail < 0) {
            // Scroll up

            index --
            if(index <= 0) {
            	index = 0;
            }
            

            $('.scroller').css('transform', 'translateY(' + height * index + 'px)');
        } else {
            // Scroll down

            index ++;
            if(index >= length - 1) {
            	index = length- 1;
            }
            

            $('.scroller').css('transform', 'translateY(' + (-height * index) + 'px)');
        }
    }, false);


});