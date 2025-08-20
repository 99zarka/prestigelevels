(function($) {

	$(document).ready(function() {
		"use strict";


		
		
	// HOVER TOGGLE
		$('.side-navigation .menu ul li a').on('click', function(e) {
	  	$(this).parent().children('.side-navigation .menu ul li ul').slideToggle(300);
        return true;
	  	});
		
		
		
	// CONTACT FORM INPUT LABEL
		function checkForInput(element) {
			  const $label = $(element).siblings('span');
			  if ($(element).val().length > 0) {
				$label.addClass('label-up');
			  } else {
				$label.removeClass('label-up');
			  }
		}

		$('input, textarea').each(function(e) {
			  checkForInput(this);
		});

		$('input, textarea').on('change keyup', function(e) {
			  checkForInput(this);  
		});
		
		
		
	// TOOLTIP
		$('[data-toggle="tooltip"]').tooltip()
		
		
		
	// PARALLAX
			$.stellar({
				horizontalScrolling: false,
				verticalOffset: 0,
				responsive:true
			});
		
		
		
	// DROPDOWN
		$('.dropdown-toggle').dropdown()
	
	
		
	// HAMBURGER
		$('.hamburger').on('click', function(e) {
			$(this).toggleClass('open');
			$('body').toggleClass('overflow');
			$('.side-navigation').toggleClass('active');
		});
	
	
	
	// DATA BACKGROUND IMAGE
			var pageSection = $("*");
			pageSection.each(function(indx){
				if ($(this).attr("data-background")){
					$(this).css("background-image", "url(" + $(this).data("background") + ")");
				}
			});
		
		
		
	// PAGE TRANSITION
		$('body a').on('click', function(e) {
			if (typeof $( this ).data('fancybox', 'filter') == 'undefined') {
			e.preventDefault(); 	
			var url = this.getAttribute("href"); 
			if( url.indexOf('#') != -1 ) {
			var hash = url.substring(url.indexOf('#'));
				
		
			if( $('body ' + hash ).length != 0 ){
			$('.transition-overlay').removeClass("active");
			$(".hamburger").toggleClass("open");
			$(".navigation-menu").removeClass("active");


			$('html, body').animate({
			scrollTop: $(hash).offset().top
			}, 1300);

			}
			}
			else {
			$('.transition-overlay').toggleClass("active");
			setTimeout(function(){
			window.location = url;
			},1300); 

			}
			}
			});
		
			
		
		
	
		
	});	
		
	
	
	// COUNTER
			 $(document).scroll(function(){
				$('.odometer').each( function () {
					var parent_section_postion = $(this).closest('section').position();
					var parent_section_top = parent_section_postion.top;
					if ($(document).scrollTop() > parent_section_top - 300) {
						if ($(this).data('status') == 'yes') {
							$(this).html( $(this).data('count') );
							$(this).data('status', 'no')
						}
					}
				});
			});
	
	
	
	
	/* GALLERY SLIDER */
	var swiper = new Swiper('.gallery-container', {
		slidesPerView: 'auto',
      	spaceBetween: 0,
		loop: true,
		autoplay: {
			delay: 4500,
			disableOnInteraction: false,
      	},
      	pagination: {
			el: '.gallery-pagination',
			clickable: true,
      },
    });
	
	
	
	
	// SLIDER
	var swiper = new Swiper('.slider-container', {
		touchRatio: 0,
		loop: true,
		speed: 600,
		autoplay: {
			delay: 4500,
			disableOnInteraction: false,
      	},
      	pagination: {
			el: '.pagination',
			type: 'fraction',
      	},
      	navigation: {
			nextEl: '.button-next',
			prevEl: '.button-prev',
      	},
    });
	
	
	
	// MASONRY
			$(window).load(function(){
				$('.gallery').isotope({
				  itemSelector: '.gallery li',
				  layoutMode: 'fitRows',
				  gutter: 15, // Add gutter for space between items
				  isOriginLeft: false
				});
			});
		
		
	
		// ISOTOPE FILTER
			var $container = $('.gallery');
			$container.isotope({
			filter: '*',
			layoutMode: 'fitRows',
			animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: false
			},
			isOriginLeft: false,
			});

			$('.gallery-filter li a').click(function(){
			$('.gallery-filter li a.current').removeClass('current');
			$(this).addClass('current');

			var selector = $(this).attr('data-filter');
			$container.isotope({
				layoutMode: 'fitRows',
				filter: selector,
				animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false
				}
			});
			return false;
			}); 
	
	
	
		// WOW ANIMATION 
			wow = new WOW(
				{
					boxClass:     'wow',      // default
					animateClass: 'animated', // default
					offset:       100,          // default
					mobile:       true,       // default
					live:         true        // default
				}
			)
			wow.init();
			
	
	
	// PRELOADER
			$(window).load(function(){
				$("body").addClass("page-loaded");	
			});
	
		
		
})(jQuery);

// Lazy loading images



var swiper = new Swiper('.logos-slider', {
    slidesPerView: 7,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1024: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        }
    }
});

/* var swiper = new Swiper('.outdoors-slider', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


});
 */
$(document).ready(function() {
    // Hide success and error messages initially
    $('#success').hide();
    $('#error').hide();

    // Listen for the iframe to load after form submission
    $('#dummyframe').on('load', function() {
        // This will trigger when the form submission to the external API completes
        // (assuming the external API returns a page that loads into the iframe).
        // We cannot reliably detect server-side success/failure from the external API
        // due to Same-Origin Policy, so we'll assume success for now.
        $('#success').fadeIn();
        $('#error').fadeOut();
        $('#contact')[0].reset(); // Clear the form
    });

    // Optional: Client-side validation to show error if form is not valid before submission
    $('#contact').on('submit', function(event) {
        const phoneNumberInput = $('#phone');
        const phoneNumber = phoneNumberInput.val();
        const phoneRegex = /^05\d{8}$/; // Starts with 05 and has 10 digits total
        const dateInput = $('#date');
        const selectedDate = new Date(dateInput.val());
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Set to start of today for comparison

        if (!this.checkValidity()) {
            event.preventDefault(); // Prevent default submission if form is invalid
			$('#error').fadeOut();
            $('#error').text('الرجاء تعبئة جميع الحقول المطلوبة بشكل صحيح.'); // Generic error for other fields
            $('#error').fadeIn();
            $('#success').fadeOut();
        } else if (!phoneRegex.test(phoneNumber)) {
            event.preventDefault(); // Prevent default submission if phone number is invalid
			$('#error').fadeOut();
            $('#error').text('رقم الجوال يجب أن يبدأ بـ 05 ويتكون من 10 أرقام.');
            $('#error').fadeIn();
            $('#success').fadeOut();
        } else if (selectedDate < today) {
            event.preventDefault(); // Prevent default submission if date is older than today
            $('#error').fadeOut();
            $('#error').text('لا يمكن تحديد تاريخ أقدم من اليوم.');
            $('#error').fadeIn();
            $('#success').fadeOut();
        }
        else {
            // If form is valid, hide any previous alerts before submission
            $('#success').fadeOut();
            $('#error').fadeOut();
        }
    });

    // Set min attribute for date input to today's date
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    const minDate = yyyy + '-' + mm + '-' + dd;
    $('#date').attr('min', minDate);

    // Prevent non-numeric input in phone number field
    $('#phone').on('input', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
		if(!this.value.toString().startsWith("05")){
        	this.value = "05";
		}

    });
});
