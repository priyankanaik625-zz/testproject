//Thumbail in case-studies page 
$(function() {
	 $('.project-banner-slider').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  fade: true,
		  asNavFor: '.project-list'
		});
	$('.project-list').slick({
	  slidesToShow: 6,
	  slidesToScroll: 1,
	  asNavFor: '.project-banner-slider',
	  dots: false,
	  centerMode: true,
	  arrows: true,
	  focusOnSelect: true,
	  
	  prevArrow: '<div class="slick-prev"></div>',
     nextArrow: '<div class="slick-next"></div>',
     responsive: [
     	{
			breakpoint: 992,
			settings: {
				slidesToShow: 5
				
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 4
				
			}
		},
		{
			breakpoint: 540,
			settings: {
				slidesToShow: 3
      		}
   		}]
	});
});