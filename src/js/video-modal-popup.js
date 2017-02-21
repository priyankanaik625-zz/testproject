// Function to open video modal
$(function(){
	$('.open-popup').magnificPopup({
	    	 items: [
	      		 {
	        		src:"https://www.youtube.com/watch?v=Wc_HC76u8F8" , type: 'iframe' // this overrides default type
	            }, 
			
	        ],
				 
	       gallery: {
	       enabled: true
	    },
	    type: 'video' // this is a default type
				
	   });
});