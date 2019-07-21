$(document).ready(function(){


    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

    // $(".youtube_main").show();
    

    function randomvid(){

        var playlist = [
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

    


    jQuery('.content_container').delegate('#twitter-widget-0', 'DOMSubtreeModified propertychange', function () {
        //function call to override the base twitter styles
        customizeTweetMedia();
    });

    var customizeTweetMedia = function () {

        jQuery('.content_container').find('.twitter-timeline').contents().find('.timeline-Tweet-media').css('display', 'none');
        //also call the function on dynamic updates in addition to page load
        jQuery('.content_container').find('.twitter-timeline').contents().find('.timeline-TweetList').bind('DOMSubtreeModified propertychange', function () {
            customizeTweetMedia(this);
        });
    }

});
