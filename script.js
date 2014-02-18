
$(document).ready(function(){
	var x = $("#ridge1").offset().left;
	alert(x);
	
// Allows the playhead to be draggable
	$(function() {
    	$('.playhead').draggable({ axis: "x" });
  	});	
	
	
//// Slide out menu
	var menuArray = [ "Search", "New Station", "Manage Stations" , "History", "Settings", "Help"];
	
	// Loop that adds individual items to the menu
	for ( var i = 0; i < menuArray.length; i++ ) {
	   // $('.side-menu').append("<p class = \"menutext\">" +labelArray[i] + "</p>");
	   $('.side-menu').append("<p class = \"menutext\">"+menuArray[i] +"</p>");
	}
	
	
// Adds labels undr the tuner
	var labelArray = [ "My Stations", "Spotlight", "Pop", "Rock", "Dance", "Electronic", "HipHop", "R&B", "Ambient", "Chill", "World", "Jazz", "Country" ];

	for ( var i = 0; i < labelArray.length; i++ ) {
    	$('.labels').append("<p class = \"stationlabels\">" +labelArray[i] + "</p>");
	}
	
	
// Function to draw the ridges
	for ( var i = 0; i < 400; i++ ) {
		// This loop creates the ridge graphics and appends each with its own ID and places them to the ridge div
    	$('.tuner').append("<div class = \"ridge\" id = \"ridge"+ i +"\"><div class = \"ridgegraphic\"></div></div>");
	}
	

// This function is for the slide out menu
$(".menu-hover").on({
    'mouseenter': function (e) {
        e.stopPropagation();
                    var $menu = $(".side-menu");
                    $menu.animate({
                     left: parseInt($menu.css('left')) < 1 ?
                     $menu.css('left') == 0 :
                        0})
                   }
});
$('.menu-hover').on({
    'mouseleave': function(){
        var $menu = $(".side-menu");
            $menu.animate({
            left: 300
        })
    }
})
	});
	
	
	
$(document).ready(function(e) {
   $('.tuner').click(function(e) {
	   
	   // Moves the playhead over to the click spot
	   // First we capture the X value of the mouse, then subtract the margin of the tuner div, then subtract half of the playhead hit area
	   $(".playhead").css({left:e.pageX-($( window ).width()*.05)-20});
    }); 
 });	
	