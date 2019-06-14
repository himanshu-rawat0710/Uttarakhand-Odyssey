/* ==============================
             services
================================== */

$(function () {
    // initialise on scroll
    new WOW().init();
});

/* ==============================
             work
================================== */

$(function () {

    $('#work').magnificPopup({

        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        // other options
        type: 'image',
        gallery: {
            enabled: true
        }

    });
});



/* ==============================
             team
================================== */

$(function () {
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 200,
        loop: true,
        autoplayHoverPause: true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 480 up
            480 : {
                items: 2
            },
            // breakpoint from 768 up
            768 : {
                items: 3
            }
            
        }
    });
});


/* ==============================
             testimonial
================================== */

$(function () {
    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 200,
        loop: true,
        autoplayHoverPause: true
    });
});


/* ==============================
             stats
================================== */
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    })
});


/* ==============================
             Client
================================== */

$(function () {
    $('#clients-list').owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 200,
        loop: true,
        autoplayHoverPause: true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 320 up
            370 : {
                items: 2
            },
            // breakpoint from 480 up
            480 : {
                items: 3
            },
            // breakpoint from 768 up
            768 : {
                items: 5
            },
            // breakpoint from 992 up
            992 : {
                items: 6
            }
        }
    });
});


/* ==============================
             navigation
================================== */

$(function () {
    $(window).scroll(function(){
        if($(this).scrollTop() < 50 ){
            // hide nav
            $("nav").removeClass("odyssey-top-nav");
            $("#back-to-top").fadeOut();
        } else {
            // show nav
            $("nav").addClass("odyssey-top-nav");
            $("#back-to-top").fadeIn();

        }
    });
});

// smooth scroll

$(function () {
    $("a.smooth-scroll").click(function(event){
        event.preventDefault();
        // get return id like about
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top - 68
        }, 1250, "easeInOutExpo");  



    });
})


//close mobile on click
$(function () {
    $(".navbar-collapse ul li a").on("click touch", function() {
        $(".navbar-toggler").click();
    });
});