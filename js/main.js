;(function () {

    'use strict';

    var carousels = function() {
        $(".owl-carousel1").owlCarousel(
            {
                loop:true,
                center: true,
                margin:0,
                responsiveClass:true,
                nav:false,
                responsive:{
                    0:{
                        items:1,
                        nav:false
                    },
                    600:{
                        items:1,
                        nav:false
                    },
                    1000:{
                        items:3,
                        nav:true,
                        loop:false
                    }
                }
            }
        );

        $(".owl-carousel2").owlCarousel(
            {
                loop:true,
                center: false,
                margin:0,
                responsiveClass:true,
                nav:true,
                responsive:{
                    0:{
                        items:1,
                        nav:false
                    },
                    600:{
                        items:2,
                        nav:false
                    },
                    1000:{
                        items:3,
                        nav:true,
                        loop:true
                    }
                }
            }
        );
    }


    // svg responsive in mobile mode
    var checkPosition = function() {
        if ($(window).width() < 767) {
            $("#bg-services").attr("viewBox", "0 0 1050 800");

        }
    };

    (function($) {
        carousels();
        checkPosition();
    })(jQuery);


}());

// menu toggle button
function myFunction(x) {
    x.classList.toggle("change");
    if ($("#my-nav").css("position") == "fixed") {
        // using .attr since .css doesn't understand !important in jquery
        $("#my-nav").attr('style', 'position: inherit;background-color: transparent !important;');
    }
    else {
        $("#my-nav").css("position", "fixed");
    }
}

//change nav color on scroll
$(function () {
    $(document).scroll(function () {
        var $nav = $("#my-nav");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        var $navlogo = $(".rashiv-nav-logo");
        if ( $nav.hasClass('scrolled') ) {
            $navlogo.attr('src', 'images/rashiv_logo-white.png');
        }
        else {
            $navlogo.attr('src', 'images/rashiv_logo-blue.png');
        }
    });
});

// courses list page
function courseHover(courseId) {
    document.getElementById(courseId).innerHTML = "View the course details";
}

// course select dropdown on contact us page
var expanded = false;
function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}
