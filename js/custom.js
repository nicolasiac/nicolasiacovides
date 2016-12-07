(function ($) {

    "use strict";

        // PRE loader
        $(window).load(function(){
          $('.preloader').fadeOut(1000); // set duration in brackets    
        });


        //Navigation Section
        $('.navbar-collapse a').on('click',function(){
          $(".navbar-collapse").collapse('hide');
        });

        $(window).scroll(function() {
          if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
              } else {
                $(".navbar-fixed-top").removeClass("top-nav-collapse");
              }
        });


        // Parallax Js
        function initParallax() {
          $('#home').parallax("50%", 20);
          $('#work').parallax("50%", 50);
          $('#about').parallax("50%", 10);
          $('#counter').parallax("50%", 40);
          $('#contact').parallax("50%", 50);
          }
        initParallax();


        // Counter
        jQuery('.counter-item').appear(function() {
        jQuery('.counter-number').countTo();
        jQuery(this).addClass('funcionando');
          console.log('funcionando');
        });


        // Smoothscroll js
        $(function() {
          $('#home a, .custom-navbar a').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
          });
        });  


        // WOW Animation js
        new WOW({ mobile: false }).init();

})(jQuery);
