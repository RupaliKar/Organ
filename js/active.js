$(document).ready(function(){
	// Header Slider 
  $('.active_slider').owlCarousel({
		loop:true,
		margin:0,
		autoplay:true,
		autoplayTimeout:5000,
		nav:true,
		dots:true,
		navText:['<i class="fas fa-angle-left"></i>',
		'<i class="fas fa-angle-right"></i>'],
		animateIn: 'fadeIn',
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
    $('.categories').owlCarousel({
		loop:true,
		margin:0,
		autoplay:true,
		autoplayTimeout:5000,
		nav:true,
		dots:true,
		navText:['<i class="fas fa-angle-left"></i>',
		'<i class="fas fa-angle-right"></i>'],
		animateIn: 'fadeIn',
		responsive:{
        0:{
            items:8
        },
        600:{
            items:7
        },
        1000:{
            items:7
        }
    }
	  
  });
   $('.seller_items').owlCarousel({
		loop:true,
		margin:0,
		autoplay:true,
		autoplayTimeout:5000,
		nav:true,
		dots:true,
		navText:['<i class="fas fa-angle-left"></i>',
		'<i class="fas fa-angle-right"></i>'],
		animateIn: 'fadeIn',
		items:4
	  
  });
   $('.active_brand').owlCarousel({
		loop:true,
		margin:0,
		autoplay:true,
		autoplayTimeout:5000,
		nav:true,
		dots:true,
		navText:['<i class="fas fa-angle-left"></i>',
		'<i class="fas fa-angle-right"></i>'],
		items:3
	  
  });
  $('.active_testimonial').owlCarousel({
		loop:true,
		margin:0,
		autoplay:true,
		autoplayTimeout:5000,
		nav:false,
		dots:true,
		items:1
	  
  });
  

});

  
