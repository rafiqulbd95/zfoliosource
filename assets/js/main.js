$(document).ready(function(){
    // Smooth scrolling using jQuery easing
    $('#NavMenu li a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
            scrollTop: (target.offset().top - 56)
            }, 1000, "easeInOutExpo");
            return false;
        }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('#NavMenu li a').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#NavMenu',
        offset: 56
    });
    $('#portfolio-container').imagesLoaded(function () {
        var $grid = $('.portfolio-grid').isotope({
            itemSelector: '.portfolio-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.portfolio-item',
            }
        });
        $('.Portfolio-btn').on('click', 'li', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
        $(".Portfolio-btn li").on("click", function () { 
            $(this).siblings(".active").removeClass("active");
            $(this).addClass("active");
        });
    });
    

    $(window).on("scroll", function () {
        var qScroll = $(this).scrollTop();
        if (qScroll > 1) {
            $("#NavMenu").addClass("menu-fixed");
        } else {
            $("#NavMenu").removeClass("menu-fixed");
        };
    });

    $('#video-gallery').lightGallery(); 


    


    $('.creative-experts-slider').owlCarousel({
        loop: true,
        margin: 30,
        autoplay:true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    });
    $('.feedback-slider').owlCarousel({
        loop: true,
        margin: 30,
        dots:true,
        autoplay:true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    });
    $('.branding-logo-slider').owlCarousel({
        loop: true,
        margin: 30,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 3,
            },
            1000: {
                items: 4,
            }
        }
    });
    if ($('counter')) {
        $('.counter').countUp({
            'time': 3000,
            'delay': 10
        });
    }






  });