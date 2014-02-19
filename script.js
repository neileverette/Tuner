
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
			
			// Gets the position of the playhead
            var offset = $(this).offset();
            var xPos = Math.round(offset.left);
			
			// Writes the X coordinate of the needle to the screen
           // $('#posX').text('x: ' + xPos);
			
			var increments = tunerWidth/5;
			
			for (var i=0; i<increments; i++){
				
				var position = i*5 + tunerStart;
			
			// Changes the background image depending on the playhead position
				if (xPos == 44){
					$('.background').css("background-image", "url(images/image0.jpg)");
				}else if(xPos == 54){
					$('.background').css("background-image", "url(images/image1.jpg)");
				}else if(xPos == 64){
					$('.background').css("background-image", "url(images/image2.jpg)");
				}else if(xPos == 74){
					$('.background').css("background-image", "url(images/image3.jpg)");
				}else if(xPos == 84){
					$('.background').css("background-image", "url(images/image4.jpg)");
				}else if(xPos == 94){
					$('.background').css("background-image", "url(images/image5.jpg)");
				}else if(xPos == 104){
					$('.background').css("background-image", "url(images/image6.jpg)");
				}else if(xPos == 114){
					$('.background').css("background-image", "url(images/image7.jpg)");
				}else if(xPos == 124){
					$('.background').css("background-image", "url(images/image8.jpg)");	
				}else if(xPos == 134){
					$('.background').css("background-image", "url(images/image9.jpg)");
				}else if(xPos == 144){
					$('.background').css("background-image", "url(images/image10.jpg)");
				}else if(xPos == 154){
					$('.background').css("background-image", "url(images/image11.jpg)");
				}else if(xPos == 164){
					$('.background').css("background-image", "url(images/image12.jpg)");
				}else if(xPos == 174){
					$('.background').css("background-image", "url(images/image13.jpg)");
				}else if(xPos == 184){
					$('.background').css("background-image", "url(images/image14.jpg)");
				}else if(xPos == 194){
					$('.background').css("background-image", "url(images/image15.jpg)");
				}else if(xPos == 204){
					$('.background').css("background-image", "url(images/image16.jpg)");
				}else if(xPos == 214){
					$('.background').css("background-image", "url(images/image17.jpg)");	
				}else if(xPos == 224){
					$('.background').css("background-image", "url(images/image18.jpg)");
				}else if(xPos == 234){
					$('.background').css("background-image", "url(images/image19.jpg)");
				}else if(xPos == 244){
					$('.background').css("background-image", "url(images/image20.jpg)");
				}else if(xPos == 254){
					$('.background').css("background-image", "url(images/image21.jpg)");
				}else if(xPos == 264){
					$('.background').css("background-image", "url(images/image22.jpg)");
				}else if(xPos == 274){
					$('.background').css("background-image", "url(images/image23.jpg)");
				}else if(xPos == 284){
					$('.background').css("background-image", "url(images/image24.jpg)");
				}else if(xPos == 294){
					$('.background').css("background-image", "url(images/image25.jpg)");
				}else if(xPos == 304){
					$('.background').css("background-image", "url(images/image26.jpg)");
				}else if(xPos == 314){
					$('.background').css("background-image", "url(images/image27.jpg)");
				}else if(xPos == 324){
					$('.background').css("background-image", "url(images/image28.jpg)");
				}else if(xPos == 334){
					$('.background').css("background-image", "url(images/image29.jpg)");
				}
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
 
 
	