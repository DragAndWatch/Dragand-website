<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1">
        <link rel="icon" type="image/png" href="assets/images/favicon.png" />
        <!-- SEO -->
        <title>Dragand . Watch - Download your subtitles by drag and drop</title>
        <meta name="description" content="DragAndWatch is a free desktop application for Mac and PC that allows you to get your favorite subtitles by dragging and dropping your file in the app." />
        <meta name="keywords" content="Dragand, drag, and, watch, dragandwatch, movies, series, subtitles, hetic">
        <meta name="author" content="Patrick HENG, Mathieu LETYRANT, Robin MASTROMARINO" />
        <meta name="copyright" content="Dragand © Copyright 2015" />
        <meta name="robots" content="index,follow" />
        <meta name="location" content="Paris, France" />
        <meta name="google-site-verification" content="FhXe4uCgaSyYtG9fpUhajSBsBUfkH5-8rozMbQQ_8ZI" />
        <!-- FB Share -->
        <meta property="og:title" content="Dragand . Watch - Download your subtitles by drag and drop" />
        <meta property="og:description" content="DragAndWatch is a free desktop application for Mac and PC that allows you to get your favorite subtitles by dragging and dropping your file in the app." />
        <meta property="og:image" content="http://dragand.watch/assets/images/og-dragand.png" />
        <meta property="og:url" content="http://dragand.watch" />
        <!-- TWITTER Share -->
        <meta name="twitter:card" content="summary">
        <meta name="twitter:site" content="@dragandwatch">
        <meta name="twitter:title" content="Dragand . Watch - Download your subtitles by drag and drop">
        <meta name="twitter:description" content="DragAndWatch is a free desktop application for Mac and PC that allows you to get your favorite subtitles by dragging and dropping your file in the app.">
        <meta name="twitter:creator" content="DragAnd">
        <meta name="twitter:image" content="http://dragand.watch/assets/images/og-dragand.png">
        <meta name="twitter:image:src" content="http://dragand.watch/assets/images/og-dragand.png">
        <meta name="twitter:domain" content="http://dragand.watch">
        <!-- GOOGLE + Share -->
        <meta itemprop="name" content="Dragand . Watch - Download your subtitles by drag and drop">
        <meta itemprop="description" content="DragAndWatch is a free desktop application for Mac and PC that allows you to get your favorite subtitles by dragging and dropping your file in the app.">
        <meta itemprop="image" content="http://dragand.watch/assets/images/og-dragand.png">
        <!-- STYLESHEETS -->
        <link href="assets/css/main.css" rel="stylesheet">
    </head>

    <body>
        <div id="fb-root"></div>

        @yield('content')

        <footer>
            <div class="container">
                <a id="logoLight" href="#"><i></i><span>DRAGAND</span></a>
                <div class="credits">
                    By <a href="http://mathieuletyrant.com/" target="_blank">Mathieu Le Tyrant</a>, <a href="http://hengpatrick.fr/" target="_blank">Patrick Heng</a>, <a href="http://robinmastromarino.com/" target="_blank">Robin Mastromarino</a>
                </div>
                <div class="social">
                    <a class="twitter-follow-button" href="https://twitter.com/dragandwatch" data-show-count="false" data-lang="en">
                        Follow @dragandwatch
                    </a>
                    <a class="twitterBtn twitter-share-button" href="https://twitter.com/share" data-via="dragandwatch">
                        Tweet
                    </a>
                </div>
            </div>
        </footer>
        
        <!-- JAVASCRIPTS -->
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
        <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"></script>
        <script src="assets/js/libs/countUp.jquery.js"></script>
        <script src="assets/js/scripts.js"></script>

        <!-- Google Analitycs -->
        <script>
            var _gaq = _gaq || [];
            _gaq.push(['_setAccount', 'UA-61669451-2']);
            _gaq.push(['_trackPageview']);
            (function() {
                var ga = document.createElement('script');
                ga.type = 'text/javascript';
                ga.async = true;
                ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(ga, s);
            })();
        </script>

        <!-- Google Tag Manager -->
        <noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-NW6GNL"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <script>
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NW6GNL');
        </script>
    </body>

</html>