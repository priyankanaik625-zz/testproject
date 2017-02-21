
$(document).ready(function(){
	$(".requirement").hide();

	$(".button-default--about-us").click(function(e){
		e.preventDefault();
		$(this).closest(".cr-design").next(".requirement").slideDown();
		$(this).hide();
	});

	$(".requirement__close").click(function(){
		$(this).closest(".requirement").slideUp();

		$(this).closest(".requirement").prev(".cr-design").find(".button-default--about-us").delay(300).fadeIn(2000);
	});
});