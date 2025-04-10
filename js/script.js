$(document).ready(function(){
    $("#banner_slider").owlCarousel({
        items:1,
        nav:true,
        margin:20,
        loop: true,
        autoplay:true,
        autoplayTimeout:5000,
        // animateIn : 'animate__fadeIn',
        // animateOut : 'animate__fadeOut',
        navText:['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
                 
    });


    $("#tech_slider").owlCarousel({
        items:4,
        nav:true,
        margin:20,
        loop: true,
        autoplay:true,
        autoplayTimeout:5000,
        // dots: true,
                 
    });

    $("#logo_slider").owlCarousel({
        items:5,
        nav:true,
        margin: 50,
        loop: true,
        autoplay:true,
        autoplayTimeout:3000,
        // dots: true,
                 
    });


    $("#test_slider").owlCarousel({
        items:2,
        // nav:true,
        margin:0,
        dots: false,
        loop:true,
        autoplay:true,
        autoplayTimeout:5000,
      
    });

    $(window).scroll(function(){
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();
      
        if (scroll >= 100) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
      });
  

      $('#scrollTop').click(function () {
        $('html, body').animate({
            scrollTop: '0px'
        },
        1500);
        return false;
    });
});