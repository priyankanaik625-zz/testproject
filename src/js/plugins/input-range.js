

$(document).ready(function(){

    $('#ex1').slider({
    formatter: function(value) {
      return 'Rs. ' + value + ' Cr';
    }
  });

});



