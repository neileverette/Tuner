
$(document).ready(function(){	
		
	$('#dragThis').draggable(
    	{
        drag: function(){
            var offset = $(this).offset();
            var xPos = offset.left;
            var yPos = offset.top;
            $('#posX').text('x: ' + xPos);
            $('#posY').text('y: ' + yPos);
        }
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
	
// Side menu functionality	
	$('.menu-hover').on({
		'mouseleave': function(){
			var $menu = $(".side-menu");
				$menu.animate({
				left: 300
			})
		}
	})

// Swap out the background image
	if($('.playheadgraphic').offset().left == $("#ridge1").offset().left ) {
		$('.background').css("background-image", "url(images/image2.jpg)");
	} 
	else {
		// code to be executed if condition is false
	}
	
	
// Allows the playhead to be draggable
	$(function() {
    	$('.playhead').draggable({ axis: "x" });
  	});	
	



	
			
	




// Allows the background to be swaped depending on the playhead
	$('.playhead').draggable(
    	{drag: function(){
			
			// All the variables needed for the function 
			
			// Get the width of the invisible hit area of the playhead
			var playheadWidth = Math.round($('.playhead').width());
			
			// Determines the bounding box of the tuner from the left side of the window
			var tunerStartPosition = Math.round($('.tuner').offset().left);
			
			// Gets the width of the neddle graphic
			var needleGraphic = $('.playheadgraphic').width();
			
			// Calculates the staring point of the tuner grahic 
			var tunerStart = tunerStartPosition - playheadWidth/2 + needleGraphic;
			
			// Calculates the width of the tuner area
			var tunerWidth = $('.tuner').width();
			
			// Sets the end point of the tuner by add the width to the starting point
			var tunerEnd = tunerStart + tunerWidth - needleGraphic;
			
			
			
			
            var offset = $(this).offset();
            var xPos = Math.round(offset.left);
			
            $('#posX').text('x: ' + xPos);
			
			if (xPos == tunerStart){
				$('.background').css("background-image", "url(images/image2.jpg)");
			}else{
				$('.background').css("background-image", "url(images/image1.jpg)");
			}
        }
   	});		



// end of function
});
	
	
	
$(document).ready(function(e) {
   $('.tuner').click(function(e) {
	   
	   // Moves the playhead over to the click spot
	   // First we capture the X value of the mouse, then subtract the margin of the tuner div, then subtract half of the playhead hit area
	   var playHeadWidth = $('.playhead')/2;
	   $(".playhead").css({left:e.pageX-($( window ).width()*.05)-playheadWidth});
    }); 
 });	
 
 
	