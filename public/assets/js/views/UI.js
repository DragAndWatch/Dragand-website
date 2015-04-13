'use strict';

var UI = {
    scrollToTop : function(duration){
        $('html,body').animate({
          scrollTop: 0
        }, duration);
    }
}