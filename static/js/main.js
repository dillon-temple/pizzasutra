$(document).ready(function(){



    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

    $('.cast_button').hide();

    function randomvid(){

        var playlist = [
            "https://www.youtube.com/watch?v=Y7Uis-2V8NY",
            "https://www.youtube.com/watch?v=5_V2OSXICSE",
            "https://www.youtube.com/watch?v=yS51ubG1Afc",
            "https://www.youtube.com/watch?v=pT9ULBgw8xI",
            "https://www.youtube.com/watch?v=AR9ECB__pXk",
            "https://www.youtube.com/watch?v=lAwewggVFzg",
            "https://www.youtube.com/watch?v=otySwF3SjS0",
            "https://www.youtube.com/embed/g7xcU8Ow_Jk",
            "https://www.youtube.com/embed/EuQjm4hu1So",
            "https://www.youtube.com/embed/SbU9LDvEm7E",
            "https://www.youtube.com/embed/6KM5BhcIt7Y",
            "https://www.youtube.com/embed/tEJlrtBfnk8",
            "https://www.youtube.com/embed/Jnv219F7wJc",
            "https://www.youtube.com/embed/kZCC-p9jvCE",
            "https://www.youtube.com/embed/eRAaGxFQNJE",
            "https://www.youtube.com/embed/nwtpUhEHDHs",
            "https://www.youtube.com/embed/ipVz0kcHH3c",
            "https://www.youtube.com/embed/4qJCVknwY8s"
        ]

        var picked = {};

        for(i = 0; i < 3; i++){

            
            var random = Math.floor(Math.random() * playlist.length);

            if(picked[random] === 1){
                i--
                continue;
            } 
            else {
                picked[random] = 1;
            }

            var video = playlist[random];
            document.getElementById("re" + i).src = video;

        }
    }

    randomvid();

    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        var bodyh = document.body.clientHeight;
        console.log("Scroll height:" + scroll);
        console.log("Page Height:" + bodyh);
        console.log("Percentage:" + (scroll / bodyh * 100));
    });;

    var bill = "Billy doesn't remember the name of the town he was born in. He does remember loving pizza as long as he can remember though. He also likes when others enjoy pizza as well. If you see him, give him a hug.";
    var jen = "Jennell generally takes photos, holds down the Pizza Sutra social media, answers emails and is basically the April O' Neil of this pizza crew";
    var serg = "Sergio was born and raised in Milwaukee Wisconsin on a steady diet of PBR, cheese curds, and pizza. His belly was forged in the depths of the hottest bar deep friers of the Midwest. He likes to make things like movies and video and drawings"
    var david = "I like Grog!"
    const circleheight = document.getElementById("circlemaster").style.marginTop
    console.log(circleheight);

    

    $(".circle1").click(function () {
        $(".cast_info").html(bill);
        if (window.innerHeight > window.innerWidth) {
            $(".circle").css("margin-top","1.2em");
        } else {
            $(".circle").css("margin-top", "0em");
        }
        $(this).addClass('bubble');
        $(".about_cast_header").html("BILLY ZASTROW");
        $(".circle2").hide();
        $(".circle3").hide();
        $(".circle4").hide();
        $(".cast_info").show();
        $(".cast_button").show();
    });
    $(".circle2").click(function () {
        $(".cast_info").html(serg);
        if (window.innerHeight > window.innerWidth) {
            $(".circle").css("margin-top", "1.2em");
        } else {
            $(".circle").css("margin-top", "0em");
        }
        $(this).addClass('bubble');
        $(".about_cast_header").html("SERGIO ESPINO");
        $(".circle1").hide();
        $(".circle3").hide();
        $(".circle4").hide();
        $(".cast_info").show();
        $(".cast_button").show();
    });
    $(".circle3").click(function () {
        $(".cast_info").html(jen);
        if (window.innerHeight > window.innerWidth) {
            $(".circle").css("margin-top", "1.2em");
        } else {
            $(".circle").css("margin-top", "0em");
        }
        $(this).addClass('bubble');
        $(".about_cast_header").html("JENNELL JENNEY");
        $(".circle2").hide();
        $(".circle1").hide();
        $(".circle4").hide();
        $(".cast_info").show();
        $(".cast_button").show();
    });
    $(".circle4").click(function () {
        $(".cast_info").html(david);
        if (window.innerHeight > window.innerWidth) {
            $(".circle").css("margin-top", "1.2em");
        } else {
            $(".circle").css("margin-top", "0em");
        }
        $(this).addClass('bubble');
        $(".about_cast_header").html("DAVID CORCAN");
        $(".circle2").hide();
        $(".circle3").hide();
        $(".circle1").hide();
        $(".cast_info").show();
        $(".cast_button").show();
    });

    $(".cast_button").click(function () {
        $(".circle").removeClass("bubble")
        $(".circle").show()
        $(".circle").css("margin-top", circleheight);
        $(".about_cast_header").html("ABOUT CAST");
        $(".cast_info").hide();
        $(this).hide();
    });


    jQuery('.content_container').delegate('#twitter-widget-0', 'DOMSubtreeModified propertychange', function () {
        //function call to override the base twitter styles
        customizeTweetMedia();
    });

    var customizeTweetMedia = function () {

        jQuery('.content_container').find('.twitter-timeline').contents().find('.timeline-Tweet-media').css('display', 'none');
        jQuery('.content_container').find('.twitter-timeline').contents().find('.timeline-Tweet').css({"border":"1.5px groove white","border-radius":"15%","margin":"0.5em"});
        //also call the function on dynamic updates in addition to page load
        jQuery('.content_container').find('.twitter-timeline').contents().find('.timeline-TweetList').bind('DOMSubtreeModified propertychange', function () {
            customizeTweetMedia(this);
        });
    }

});
