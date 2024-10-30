// Scroll Top
	jQuery(document).on("click", ".back-to-top", function(){
		jQuery(this).removeClass('display');
		jQuery('html, body').animate({
			scrollTop: 0			
		}, 600);
	});

	// Scroll show icon section index
	jQuery(window).on("scroll", function() {	
		/* Process scroll header top  */		
		if (jQuery(window).width() >= 768) {
			if( jQuery(window).scrollTop() > jQuery('header').height() ) {
				jQuery('nav.navbar-main.navbar').addClass('affix-top-menu');
			}else {
				jQuery('nav.navbar-main.navbar').removeClass('affix-top-menu');
			}
		} else {
			if( jQuery(window).scrollTop() > 0 ) {
				jQuery('.box-search-mobile').hide();
			} else {
				jQuery('.box-search-mobile').show();
			}
		}
		/* Scroll to top */
		if ( jQuery('.back-to-top').length > 0 && jQuery(window).scrollTop() > 500 ) {
			jQuery('.back-to-top').addClass('display');
		} else {
			jQuery('.back-to-top').removeClass('display');
		}

		if ($(window).scrollTop() > 250) {
			$('.other_link').addClass('fixed');
		} else {
			$('.other_link').removeClass('fixed');
		}
		
	});
	// View more description product
	/*if ($('.description-productdetail').length > 0) {
		if ($('.description-productdetail').height() > 400 ) {
			$('.description-productdetail').css('height','400');
		} else {
			$('.view-more-detail').addClass('hidden');
		}
	}
	$(document).on("click", ".view-more-detail", function(){
		if ( $('.description-productdetail').length > 0 ) {
			$(this).addClass('hidden');
			$('.description-productdetail').removeAttr('style');
		} 
	});*/
	$(document).on("click", ".dropdown-filter", function(){
		if ( $(this).parent().attr('aria-expanded') == 'false' ) {
			$(this).parent().attr('aria-expanded','true');
		} else {
			$(this).parent().attr('aria-expanded','false');
		}
	});
	$(document).on("click", "#trigger-mobile", function(){
		if ($('body').hasClass('responsive') == false) {
			$('body').addClass('responsive helper-overflow-hidden');
			$('html').addClass('helper-overflow-hidden');

			$(window).scrollTop(0);
			$('body').removeClass('hideresponsive');
			$("#box-wrapper").bind('click', function () {
				$("body").removeClass("responsive helper-overflow-hidden");
				$('html').removeClass('helper-overflow-hidden');
				$('body').addClass('hideresponsive');
				$("#box-wrapper").unbind('click');
			});
		}
		else {
			$("body").removeClass("responsive helper-overflow-hidden");
			$('html').removeClass('helper-overflow-hidden');
			$('body').addClass('hideresponsive');
		}
	});

	$(document).on("click", "#menu-mobile li a", function(){
		if ($(this).parent('li').hasClass('active')){
			$('#menu-mobile .menu-mobile ul').slideUp('fast');
			$(this).parent('li').removeClass('active');
		} else {
			$('#menu-mobile li.active').removeClass('active');
			$('#menu-mobile .menu-mobile ul').slideUp('fast');
			$(this).parent('li').addClass('active').find('ul').slideDown('fast');
		}
	});


	$(document).ready(function(){
  
		// Group Brand owl-carousel index
	if ($('.brand-carousel').length > 0 ) {
		$('.brand-carousel .owl-carousel').owlCarousel({
			items: 5,
			loop:true,
		    margin:10,
		    nav:true,
		    autoPlay:true,
		     navText: ['<i class="fa fa-chevron-left fa-5x"></i>', '<i class="fa fa-chevron-right fa-5x"></i>'],
			responsive:{
				0:{
					items:3
				},
				768:{
					items:5
				},
				1024:{ 
					items:5
				}
			}
		});
	}
	if ($('.brand-carousel2').length > 0 ) {
		$('.brand-carousel2 .owl-carousel').owlCarousel({
			navigation: !0,
		    navigationText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
			items: 5,
			loop:true,
		    margin:10,
		    nav:true,
		    autoPlay:true,
		    lazyLoad : true,

			responsive:{
				0:{
					items:3
				},
				768:{
					items:3
				},
				1024:{ 
					items:5
				}
			}
		});
	}
	
	
	if ($('.abc').length > 0 ) {
		$('.abc .owl-carousel').owlCarousel({
			items: 3,
			loop:true,
		    margin:10,
		    nav:true,
		    autoPlay:true,
		     navText: ['<i class="fa fa-chevron-left fa-5x"></i>', '<i class="fa fa-chevron-right fa-5x"></i>'],
			responsive:{
				0:{
					items:2
				},
				768:{
					items:3
				},
				1024:{ 
					items:3
				}
			}
		});
	}
	
	if ($('.quytrinhmo').length > 0 ) {
		$('.quytrinhmo .owl-carousel').owlCarousel({
			items: 2,
			loop:true,
		    margin:10,
		    nav:true,
		    autoPlay:true,
		    navText: ['<i class="fa fa-chevron-left fa-5x"></i>', '<i class="fa fa-chevron-right fa-5x"></i>'],
			responsive:{
				0:{
					items:2
				},
				768:{
					items:2
				},
				1024:{ 
					items:4
				}
			}
		});
	}
	// Group collection owl-carousel index
	
		$('#blog-news .owl-carousel2').owlCarousel({
			loop:true,
		    margin:10,
		    nav:true,
		    items:1,
		    autoPlay:true,
		    
	
	});
		// Menu sidebarleft index
	if ($('#menusidebarleft').length > 0 ) {
		$('#menusidebarleft li i').click(function(e){
			if ( $(this).parent('li').attr('aria-expanded') == 'false' ) {
				e.preventDefault();
				if ( $(this).parent('.submenu-parent').length > 0 ) {
					$(this).parent('.submenu-parent').parent('ul').find('li.submenu-parent,li.submenu-children').attr('aria-expanded','false').children('ul').slideUp();
					$(this).addClass('fa-angle-down');	
				} else {
					if ( $(this).parent('.submenu-children').length > 0 ) {
						$(this).parent('.submenu-children').parent('ul').children('li.submenu-parent,li.submenu-children').attr('aria-expanded','false').children('ul').slideUp();
					
				}
				}
				$(this).parent('li').attr('aria-expanded','true');
				$(this).nextAll(".dropdown-menu").slideDown();
				$(this).next('ul').slideDown();	

			} else {
				$(this).removeClass('fa-angle-down');
				$(this).nextAll(".dropdown-menu").slideUp();
				$(this).parent('li').attr('aria-expanded','false');
			}
		});
	}

});