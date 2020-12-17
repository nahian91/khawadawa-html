(function ($) {
	"use strict";

    jQuery(document).ready(function($){
		/* Testimonial Carousel */
        $(".testimonial_area").owlCarousel({
			items: 2,
			autoplay: false,
			loop: true,
			margin: 60,
			nav: false,
			dots: true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:2
				}
			}
		});
		/* Slider Carousel */
        $(".slider").owlCarousel({
			items: 1,
			autoplay: true,
			loop: true,
			nav: false,
			dots: true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:1
				}
			}
		});	
		/* Galllery Magnific */		
		$('.single_gallery').magnificPopup({
		  type: 'image'
		});
		/* Mobile Menu Active */		
		$('#navbar-nav').slicknav();
		
		/* Onepage Active */		
		$('.onepage_nav').onePageNav({
			currentClass : 'active',
			scrollSpeed : 600,
			filter: ':not(.url)'
		});	
		/* Typed JS Activ */		
		var element = $(".element");
			element.typed({
                strings: ["Awesome", "Tasty",  "Healthy"],
                typeSpeed: 100,
                loop: true
            });
    });


    jQuery(window).load(function(){
			/* TOP Menu Stick  */
			$(window).on('scroll',function() {
			if ($(this).scrollTop() > 1){  
				$('.sticky_header').addClass("sticky");
			  }
			  else{
				$('.sticky_header').removeClass("sticky");
			  }
			}); 
		});
}(jQuery));	