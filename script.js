$(document).ready(function(){
	
	// Allows the playhead to be draggable
	$(function() {
    $( ".playhead" ).draggable({ axis: "x" });
  	});
	
	for ( var i = 0; i < 400; i++ ) {
	// This loop creates the ridge graphics and appends each with its own ID and places them to the ridge div
    	$('.ridges').append("<div class = \"ridge\" id = \"ridge"+ i +"\"><div class = \"ridgegraphic\"></div></div>");
	}
});


$(document).ready(function(e) {
   $('.tuner').click(function(e) {
	   
	   $( window ).width();
	   
	   $(".playhead").css({left:e.pageX-($( window ).width()*.05 - 20)});
    }); 
 });