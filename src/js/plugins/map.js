// MAP STYLES
// function displayMap() {
// document.getElementById('map_canvas_2').style.display="block";
// initialize();
// }

function initMap() {
	map = new google.maps.Map(document.getElementById("map_canvas"),
	myOptions);

}

function initMap() {
	map = new google.maps.Map(document.getElementById("map_canvas_2"),
	myOptions);

}

function initMap() {
	map = new google.maps.Map(document.getElementById("map_canvas_3"),
	myOptions);
}
   var latlng = new google.maps.LatLng(12.914521, 77.649076);
   var latlng2 = new google.maps.LatLng(13.061982, 77.582204);
   var latlng3 = new google.maps.LatLng(12.875480, 77.650766);
   var myOptions =
   {
      	 zoom: 15,
       	center: latlng,
      	 mapTypeId: google.maps.MapTypeId.ROADMAP,
		scrollwheel: true,
		streetViewControl: false,
		mapTypeControl: false,
		// map styles go here
		styles: [

		]

   };

   var myOptions2 =
   {
       	zoom: 15,
       	center: latlng2,
      	mapTypeId: google.maps.MapTypeId.ROADMAP,
       	scrollwheel: true,
		streetViewControl: false,
		mapTypeControl: false,
		// map styles go here
		styles: [	
		]
	   };

	   var myOptions3 =
	   {
	       	zoom: 15,
	      	center: latlng3,
	       	mapTypeId: google.maps.MapTypeId.ROADMAP,
	       	scrollwheel: true,
			streetViewControl: false,
			mapTypeControl: false,

		// map styles go here
		styles: [	
		]
	   };

	   var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	   var map2 = new google.maps.Map(document.getElementById("map_canvas_2"), myOptions2);
	   var map3 = new google.maps.Map(document.getElementById("map_canvas_3"), myOptions3);

	   var myMarker = new google.maps.Marker(
	   {
	       position: latlng,
	       map: map,
	       title:"Bonito HSR Layout",
			icon: 'https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/location-24-32.png',
			optimized: false
	  });


	   var myMarker2 = new google.maps.Marker(
	   {
	       position: latlng2,
	       map: map2,
	       title:"Bonito Sahakara Nagar",
			icon: 'https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/location-24-32.png',
			optimized: false
	   });

	    var myMarker3 = new google.maps.Marker(
	   {
	       position: latlng3,
	       map: map3,
	       title:"Bonito Industrial Area",
			icon: 'https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/location-24-32.png',
			optimized: false
	   });


	  //js for togglig the address
	  $(".maps__map").fadeOut();
	  $("#map_canvas").fadeIn();

	   $('#address1').click(function() {
			$("#map_canvas").fadeIn();
			$("#map_canvas_3, #map_canvas_2").fadeOut();
		});

	  $('#address2').click(function() {
			$("#map_canvas_2").fadeIn();
			$("#map_canvas, #map_canvas_3").fadeOut();
		});

	   $('#address3').click(function() {
			$("#map_canvas_3").fadeIn();
			$("#map_canvas, #map_canvas_2").fadeOut();
		});


		//JS function to to toggle  diffrerent adresses

		// $("map-address li ").hide();
		// $("map-address li.active").show()

// myMarker.addListener('click', toggleBounce);
// myMarker2.addListener('click', toggleBounce2);
// myMarker3.addListener('click', toggleBounce3);
// function toggleBounce() {
// 	if (myMarker.getAnimation() !== null) {
// 		myMarker.setAnimation(null);
// 	} else {
// 		myMarker.setAnimation(google.maps.Animation.BOUNCE);
// 	}
// }
// function toggleBounce2() {
// 	if (myMarker2.getAnimation() !== null) {
// 		myMarker2.setAnimation(null);
// 	} else {
// 		myMarker2.setAnimation(google.maps.Animation.BOUNCE);
// 	}
// }
// function toggleBounce3() {
// 	if (myMarker3.getAnimation() !== null) {
// 		myMarker3.setAnimation(null);
// 	} else {
// 		myMarker3.setAnimation(google.maps.Animation.BOUNCE);
// 	}
// }

