$(document).ready(function(){
	
	// Allows the playhead to be draggable
	$(function() {
    	$( ".playhead" ).draggable({ axis: "x" });
  	});
	
	// Loop to draw ridges
	for ( var i = 0; i < 400; i++ ) {
		// This loop creates the ridge graphics and appends each with its own ID and places them to the ridge div
    	$('.ridges').append("<div class = \"ridge\" id = \"ridge"+ i +"\"><div class = \"ridgegraphic\"></div></div>");
	}
	
	// Array for all the music genres
	var labelArray = [ "My Stations", "Spotlight", "Pop", "Rock", "Dance", "Electronic", "HipHop", "R&B", "Ambient", "Chill", "World" ];
	
	// Loop that adds individual ridges to the container div
	for ( var i = 0; i < labelArray.length; i++ ) {
    // create a ridge
    $('.labels').append("<p class = \"stationlabels\">" +labelArray[i] + "</p>");
	}
	
});


$(document).ready(function(e) {
   $('.tuner').click(function(e) {
	   
	   // Moves the playhead over to the click spot
	   // First we capture the X value of the mouse, then subtract the margin of the tuner div, then subtract half of the playhead hit area
	   $(".playhead").css({left:e.pageX-($( window ).width()*.05)-20});
    }); 
 });
 

 
 
