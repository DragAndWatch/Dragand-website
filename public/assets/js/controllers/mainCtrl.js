// Click on bottom logo 
$('#logoLight').on('click', function() {
    UI.scrollToTop(1000);
});


$(window).scroll(function() {
	checkCircleAnimation();
});
$(window).on('resize', function() {
	checkCircleAnimation();
});


// Trigger circle animation on scroll
function checkCircleAnimation() {
    $('.circle').each(function(i) {
        var bottom_of_object = $(this).offset().top;
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if (bottom_of_window > bottom_of_object) {
            $(this).addClass('visible');
        }
    });
}



// Add Twitter button script
window.twttr = (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);
    t._e = [];
    t.ready = function(f) {
        t._e.push(f);
    };
    return t;
}(document, "script", "twitter-wjs"));

