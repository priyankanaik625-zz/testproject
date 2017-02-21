//Pralallax image scroll Animation in bhome page
$(function(){
  	if (window.matchMedia('(min-width: 767px)').matches) { 
	  	$(function() {
	  		$.stellar({ 
	  			horizontalScrolling : true, 
	  			verticalOffset : 0 
	  		}); 
	  	}); 
	}
});