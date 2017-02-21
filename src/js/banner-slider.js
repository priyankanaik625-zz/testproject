//Banner slider in home

$(function() {
	$('.carousel-inner').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows : false,
		  dots : true,
		  autoplay: true,
		  infinite: true
		});
});