
$(document).ready(function(){

		//FILTERS

		// if (window.matchMedia("(max-width:768px)").matches) {	
			$(".portfolio-filters__heading ").click(function(){
					$(".portfolio-filters__info").toggleClass("portfolio-filters__info--visible ");
			});
		// }
		// else {
		// 	$(".portfolio-filters__heading ").click(function(){
		// 			$(".portfolio-filters__info").removeClass("portfolio-filters__info--visible ");
		// 	});
		// }

		$(".filters__heading").click(function(){
					$(".portfolio-filters__info").removeClass("portfolio-filters__info--visible ");
			});

});

//function close menu on click out of element
$(function() {
	$(document).on('mouseup', function(e) {

		container = $("#filters__content");

		if (!container.is(e.target)// if the target of the click isn't the container...
		&& container.has(e.target).length === 0)// ... nor a descendant of the container
		{
			// $(".portfolio-filters__info").removeClass("portfolio-filters__info--visible ");

			if (container.hasClass('portfolio-filters__info--visible')) 
			{

				$(".portfolio-filters__info").removeClass("portfolio-filters__info--visible ");

			}
		}
	
	});
});



//FUNCTION TO TOGGLE BETWEEN ACCORDIAN AND HEADINGS

function toggleChevron(e) {
    $(e.target)
        .prev('.panel-heading')
        .find("i.indicator")
        .toggleClass('fa-plus fa-minus');
}
$('#accordion').on('hidden.bs.collapse', toggleChevron);
$('#accordion').on('shown.bs.collapse', toggleChevron);



if (window.matchMedia("(min-width: 768px)").matches) {
	$(".panel-collapse").addClass("in");
}
else {

	$(".panel-collapse").removeClass("in");
	$("div.panel:first-of-type .panel-collapse").addClass("in");
}

$(window).resize(function(){
	if (window.matchMedia("(min-width: 768px)").matches) {
	$(".panel-collapse").addClass("in");
	}
	else {

		$(".panel-collapse").removeClass("in");
		$("div.panel:first-of-type .panel-collapse").addClass("in");
	}
});