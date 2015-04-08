'use strict';

var UI = {
    scrollToTop : function(duration){
        $('html,body').animate({
          scrollTop: 0
        }, duration);
    };


}





$('.slideLeft').each(function (i) {
                var bottom_of_object = $(this).offset().top;
                var bottom_of_window = $(window).scrollTop() + $(window).height();

                if (bottom_of_window > bottom_of_object) {
                    $(this).addClass('animated fadeInLeft');
                 }
             });