//Client slider in Home page

$(function(){
	$('.our-clients-slider').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			speed: 500,
			arrows : false,
			dots : false,
			autoplay: true,
			infinite: true,
			responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}, 
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
		}]
	});
});


