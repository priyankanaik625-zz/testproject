
$(document).ready(function(){

	$(".logo-white").hide();
	$(".navbar-btn").click(function(){
		$(".navbar-btn").toggleClass("active");
		$(".nav-right--list__item").toggleClass("active");
		// $(".navbar-brand").toggleClass("active");
		 $(".nav.navbar-nav").toggleClass("active");
		 $(".logo-white").toggle();
		  $(".logo-blue").toggle();
	});
	
});


//HAMBERGER ANIMATION
$(document).ready(function(){
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
	});
});

//ONHOVER SHOW DROPDOWN ON TAB AND DESKTOP

$(document).ready(function(){

	//to aa
	// $('ul.nav li.dropdown').hover(function() {
	//   $(this).find('.dropdown-list').stop(true, true).delay(200).fadeIn(500);
	// }, function() {
	//   $(this).find('.dropdown-list').stop(true, true).delay(200).fadeOut(500);
	// });


	if (window.matchMedia("(max-width: 768px)").matches) {

		$(".dropdown-list__item").hide();
	 	$(".dropdown-toggle").click(function(){
		 // event.stopPropagation();
		  $(this).next(".dropdown-list").find(".dropdown-list__item").slideToggle();
		});

		//Close dropdown onclick
		$(".navbar-toggle").click(function(){
			$(".dropdown-list__item").slideUp();
		});

		
	}
	else 
	 {
		$(".dropdown-list__item").show();
	 	$(".dropdown-toggle").hover(function(){
		 $(this).next(".dropdown-list").find(".dropdown-list__item").toggleClass("active");
		});
		$(".dropdown-list").hover(function(){
			 $(this).find(".dropdown-list__item").toggleClass("active");
		});
	}

	
});



