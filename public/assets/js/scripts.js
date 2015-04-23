$(document).ready(function() {
    var numbersAnim = false;

    // ---- OnScroll Animations
    $(window).scroll(function() {
        checkCircleAnimation();
        apiSectionAnimation();
        newsletterSectionAnimation();
    });
    // ---- OnResize
    $(window).on('resize', function() {
        checkCircleAnimation();
        apiSectionAnimation();
		newsletterSectionAnimation();
    });

    // ---- Scroll icon 
    $('#scrollIcon').on('click', function (ev){
        ev.preventDefault();
        $('html, body').animate( { scrollTop: $('#features').offset().top }, 700 );
    });
    // ---- Click on bottom logo 
    $('#logoLight').on('click', function(ev) {
        ev.preventDefault();
        $('html, body').animate( { scrollTop: 0 }, 1000 );
    });

    // ---- Trigger circle animation on scroll
    function checkCircleAnimation() {
        $('.circle').each(function(i) {
            var bottom_of_object = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_object - 100) {
                $(this).addClass('visible');
            }
        });
    };

    // ---- apiSection animations triggered by scroll
    function apiSectionAnimation() {
        var bottom_of_object = $('#apiStats').offset().top;
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if (bottom_of_window > bottom_of_object + 30 && !numbersAnim) {
            $('#subNumber').countTo({
                from: 0,
                to: 4.25,
                speed: 2000,
                decimals: 2,
                refreshInterval: 20,
            });
            $('#languageNumber').countTo({
                from: 0,
                to: 41,
                speed: 2000,
                refreshInterval: 20,
            });
            $('#apiNumber').countTo({
                from: 0,
                to: 4,
                speed: 2000,
                refreshInterval: 20,
            });
            $('#apiStats').find('.left').addClass('fadeInUp');
            numbersAnim = true;
        }
    };

    // ---- joinTheLeague animations 
    $('#gitHubSvg g').not('#gitHubSVGGroup').each(function() {
        var durationInterval = {
            min: 10,
            max: 30
        }
        var delayInterval = {
            min: 0,
            max: 3
        }

        var durationRandom = Math.floor(Math.random() * (durationInterval.max - durationInterval.min)) + durationInterval.min;
        var delayRandom = Math.floor(Math.random() * (delayInterval.max - delayInterval.min)) + delayInterval.min;

        $(this).css({
            'animation-name': 'flash',
            'animation-iteration-count': 'infinite',
            'animation-duration': durationRandom + 's',
            'animation-delay': delayInterval + 's'
        })
    });

	// ---- Newsletter animation
	function newsletterSectionAnimation() {
		var nlSection = $('#newsletter')
		var bottom_of_object = nlSection.offset().top;
		var bottom_of_window = $(window).scrollTop() + $(window).height();
		var lightCall = $('#dragandLightCall');

		if (bottom_of_window > bottom_of_object + 30) {
			nlSection.addClass('scrolled');
			setTimeout(function(){
				lightCall.addClass('animated');
			},1000);
		}
	};


    // ---- Add Twitter share script
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

    // ---- Add Twitter follow script
   window.twttr=(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],t=window.twttr||{};if(d.getElementById(id))return;js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);t._e=[];t.ready=function(f){t._e.push(f);};return t;}(document,"script","twitter-wjs"));

});
