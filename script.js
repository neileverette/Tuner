
$(document).ready(function(e){	


//// GLOBAL VARIABLES

	//// ALBUM TITLES
		var titleArray = [ "Rocky Horror Picture ", "Girl on Fire", "Must Be Nice", "People of the World","Holding Sky","When You Were Mine","Goblin", "Chromeo", "A Real Live One", "One in a Million", "Obsession", "Flowers in Your Haiur", "Night Visions", "Muppets Rawk", "Good News For People Who Like Bad News", "Art Pop", "Finally Rich", "I'm In Love With Your Mom", "Believe", "Dedication4", "Moon","Graduation", "The World Should Know", "Salute Me, Shoot Me", "Vicious Lies", "Just Feels Good", "The Sun Comes Out At Night", "Girl Gone Wild", "Bangerz", "Rocky Horror Picture ", "Girl on Fire", "Must Be Nice", "People of the World","Holding Sky","When You Were Mine","Goblin", "Chromeo", "A Real Live One", "One in a Million", "Obsession", "Flowers in Your Haiur", "Night Visions", "Muppets Rawk", "Good News For People Who Like Bad News", "Art Pop", "Finally Rich", "I'm In Love With Your Mom", "Believe", "Dedication4", "Moon","Graduation", "The World Should Know", "Salute Me, Shoot Me", "Vicious Lies", "Just Feels Good", "The Sun Comes Out At Night", "Girl Gone Wild", "Bangerz", "Rocky Horror Picture ", "Girl on Fire", "Must Be Nice", "People of the World","Holding Sky","When You Were Mine","Goblin", "Chromeo", "A Real Live One", "One in a Million", "Obsession", "Flowers in Your Haiur", "Night Visions", "Muppets Rawk", "Good News For People Who Like Bad News", "Art Pop", "Finally Rich", "I'm In Love With Your Mom", "Believe", "Dedication4", "Moon","Graduation", "The World Should Know", "Salute Me, Shoot Me", "Vicious Lies", "Just Feels Good", "The Sun Comes Out At Night", "Girl Gone Wild", "Bangerz", "Rocky Horror Picture ", "Girl on Fire", "Must Be Nice", "People of the World","Holding Sky","When You Were Mine","Goblin", "Chromeo", "A Real Live One", "One in a Million", "Obsession", "Flowers in Your Haiur", "Night Visions", "Muppets Rawk", "Good News For People Who Like Bad News", "Art Pop", "Finally Rich", "I'm In Love With Your Mom", "Believe", "Dedication4", "Moon","Graduation", "The World Should Know", "Salute Me, Shoot Me", "Vicious Lies", "Just Feels Good", "The Sun Comes Out At Night", "Girl Gone Wild", "Bangerz"];
		
	//// ARTISTS TITLES
		var artistArray = [ "Various Artists ", "Alicia Keys", "Plndr", "Burning Spear","Throne and Lion", "Bruno Mars","Tyler the Creator","Amerigo Gazaway", "Iron Maiden", "Aaliyah", "Shane Ward", "The Lumineers", "Imagine Dragons", "Sesame Street", "Modest Mouse", "Lady Gaga", "Cheif Keef", "Angry Somoans", "Justin Bieber", "Lil Wayne", "Reonda", "Kayne West", "Burning Spear", "DJ Holiday", "Dangerous", "Thompson Square", "Filter", "Madonna", "Miley Cirus", "Various Artists ", "Alicia Keys", "Plndr", "Burning Spear","Throne and Lion", "Bruno Mars","Tyler the Creator","Amerigo Gazaway", "Iron Maiden", "Aaliyah", "Shane Ward", "The Lumineers", "Imagine Dragons", "Sesame Street", "Modest Mouse", "Lady Gaga", "Cheif Keef", "Angry Somoans", "Justin Bieber", "Lil Wayne", "Reonda", "Kayne West", "Burning Spear", "DJ Holiday", "Dangerous", "Thompson Square", "Filter", "Madonna", "Miley Cirus", "Various Artists ", "Alicia Keys", "Plndr", "Burning Spear","Throne and Lion", "Bruno Mars","Tyler the Creator","Amerigo Gazaway", "Iron Maiden", "Aaliyah", "Shane Ward", "The Lumineers", "Imagine Dragons", "Sesame Street", "Modest Mouse", "Lady Gaga", "Cheif Keef", "Angry Somoans", "Justin Bieber", "Lil Wayne", "Reonda", "Kayne West", "Burning Spear", "DJ Holiday", "Dangerous", "Thompson Square", "Filter", "Madonna", "Miley Cirus", "Various Artists ", "Alicia Keys", "Plndr", "Burning Spear","Throne and Lion", "Bruno Mars","Tyler the Creator","Amerigo Gazaway", "Iron Maiden", "Aaliyah", "Shane Ward", "The Lumineers", "Imagine Dragons", "Sesame Street", "Modest Mouse", "Lady Gaga", "Cheif Keef", "Angry Somoans", "Justin Bieber", "Lil Wayne", "Reonda", "Kayne West", "Burning Spear", "DJ Holiday", "Dangerous", "Thompson Square", "Filter", "Madonna", "Miley Cirus"];

	//// STATIONS
		var stationsArray = ["Album of the Week","Today's Hits","'80s,'90s & Today","'00 Hits","Soft Hits","Oldies","'70s Hits", "Love Songs", "Party Hits", "Classic Hits", "Pop Workout", "Pop Remix", "13 Easy Listening", "Contemporary Jazz", "Hard Rock" ];


// FAKE SPLASH SCREEN
	function launchsplashScreen(x){
		$('.splashScreen').delay(x).fadeOut();
		turnOnGradient(x);  	// AFTER THE LAUNCH SCREEN LOADS, LOAD THE GRADIENT
}

// TURN ON GRADIENT
	function turnOnGradient(x){
		setTimeout(function() { 
    		$('.overlay').css('display','inline'); // TURNS THE GRADIENT ON AFTER X SECONDS
    		//$('.overlay2').css('display','inline'); // TURNS THE GRADIENT ON AFTER X SECONDS
		}, x);	
	}

// FAKE LOADING GRAPHIC
	function loadingGraphic(){
		$('.loadingFill').delay(800).toggle('slide', {direction: 'left'}, 900); // FAKE PROGRESS BAR
}

// WIRTE LABELS UNDER THE TUNER BAR
	function writeStations(){
		
		// LABELS UNDER THE TUNER GRAPHIC
		var labelArray = [ "My Stations", "Spotlight", "Pop", "Rock", "Dance", "Electronic", "HipHop", "R&B", "Ambient", "Chill", "World", "Jazz", "Country" ];
		
		for ( var i = 0; i < labelArray.length; i++ ) {
			$('.labels').append("<p class = \"stationlabels\">" +labelArray[i] + "</p>");
		}
	}
	
// WRITES THE LABLES IN THE LEFT MENU
	function writeLabels(){	
		//// SLIDE OUT MENU VARIABLES
		var menuArray = [ "Create Station", "Manage Stations" , "Customize Stations", "History","Settings", "Help"];
		
		// Loop that adds individual items to the menu
		for ( var i = 0; i < menuArray.length; i++ ) {
		   $('.side-menu').append("<p class = \"menutext\">"+menuArray[i] +"</p>");
		}
		$('.side-menu').append("<img src=\"images/fine_tune.png\" class=\"fineTune\" width=\"218\" height=\"253\">");
	}

// CREATES THE SIDE MENU 
	function sideMenu(){
	// SHOW THE MENU WHEN THE USER HOVERS OVER TO THE RIGHT OF THE WINDOW
	$('.menu-hover').mouseenter(function(){
		$('.side-menu').toggle('slide', {direction: 'right'}, 300);
		});
		
	// HIDE THE MENU WHEN THE USER LEAVES THE SIDEBAR
	$('.side-menu').mouseleave(function(){
		$('.side-menu').toggle('slide', {direction: 'right'}, 300);
		});
}

// SET MOUSE EVENT ON BUTTONS
	function mouseEvents(){
        
     // ADD BUTTON OPTIONS
     $('#add, #more, #like, #dislike, #volume').hover(function(){
     		$(this).toggleClass('buttonHover');
        }); 
     
     // MORE BUTTON CLICK TO OPEN
     $('#more').click(function(){
			$('.optionsPicker').fadeIn("fast");
		 });
	
	// CLICK TO CLOSE OUT THE OPTIONS MENU
	$('.optionsPicker').click(function(){
			$('.optionsPicker').fadeOut("fast");
		 });
		 
	// CLICK ANYWHERE TO CLOSE THE DIALOG 
	$('.overlay').click(function(){
			$('.optionsPicker').fadeOut("fast");
		 });
        
	// CLICK TO LIKE
	$('#like').click(function(){
			$('.dialogLike').fadeIn("slow");
			$('.dialogLike').delay(500).fadeOut("slow");
		 });
		 
	// CLICK TO DISLIKE
	$('#dislike').click(function(){
			$('.dialogDislike').fadeIn("slow");
			$('.dialogDislike').delay(500).fadeOut("slow");
		 });	
		 
		 	 
	// SET THE VOLUME SLIDER
	
		// FIRST GET THE XPOSITION OF THE VOLUME BUTTON
		var volumeButtonX = $('#volume').offset().left;
		var volumeButtonY = $('#volume').offset().top - $('.volume').height()/2 + $('#volume').height()/2;
	
		// SET THE SLIDER STATE XPOSITION
		$('.volume').offset({left: volumeButtonX });
		$('.volume').offset({top: volumeButtonY });	
		
		// SET THE CLICK BEHAVIOR ON VOLUME BUTTON
		$('#volume').click(function(){
			$(this).css('opacity','0');
			$('.volume').fadeIn("fast");
		});
		
		
		// CLICK TO DISMISS THE VOLUME BUTTON
		$('.overlay').click(function(){
			$('#volume').css('opacity','1');
			$('.volume').fadeOut("fast");
		});
	
		// DRAG THE VOLUME KNOB
		$('.volumeKnob').draggable({ axis: "y" });
	 	 
      	    
}

	
// ALLOWS PLAYHEAD TO BE DRAGGABLE
	function dragPlayhead(){
		
		// VARIABLES FOR THE FUNCTION		
		
		// PLAYHEAD
		var playhead = Math.floor($('.playhead').offset().left);
		
		// HIT AREA OF THE PLAYHEAD
		var playheadWidth = Math.round($('.playhead').width());
				
		// STARTING X COORDINATE OF THE TUNER REGION
		var tunerStartPosition = Math.round($('.tuner').offset().left);
				
		// WIDTH OF PLAYHEAD GRAHPIC
		var needleGraphic = $('.playheadgraphic').width();
				
		// Calculates the staring point of the tuner grahic 
		var tunerStart = tunerStartPosition - playheadWidth/2 + needleGraphic;
				
		// Calculates the width of the tuner area
		var tunerWidth = $('.tuner').width();
				
		// Sets the end point of the tuner by add the width to the starting point
		var tunerEnd = tunerStart + tunerWidth - needleGraphic;	
		
		// DRAG FUNCTION ONLY ON THE X AXIS
		$(function() {
			// WHILE THE PLAYHEAD IS WITHIN BOUNDS OF THE TUNER BAR, ALLOW IT TO BE DRAGGED	
				$('.playhead').draggable({ axis: "x" });
		});	
			
		// SWAP BACKGROUND IMAGE AS THE PLAYHEAD MOVES
			$('.playhead').draggable(
				{drag: function(){
							
					// Gets the position of the playhead
					var offset = $(this).offset();
					var xPos = Math.round(offset.left);
					
					// SETS THE INCREMENT LEVEL OF STATIONS
					var increments = tunerWidth/10;
					
					for (var i=0; i<increments; i++){
						
						var position = i*10 + tunerStart;
					
						// Changes the background image depending on the playhead position
						if (xPos == position){
							changeArtist(); 	// CHANGE THE ARTIST
							changeStation(); 	// CHANGE THE STATION
							changeTitle(); 		// CHANGE THE SONG
							changeBackground()	// CHANGE THE BACKGROUND
						}
					}
				}
			});
	}


// CLICK GO DIRECTLY TO ANY POINT ON THE TUNER
	function clickToTune(){
	
		//VARIABLES FOR THE FUNCTION
		var playhead = $('.playhead');
		var playheadNeedle = $('.playheadgraphic');
		var tuner = $('.tuner');
		var leftMargin = parseInt($('.stationInfo').css("left"));
		
		
		// FUNCTION TO CHANGE THE PLAYHEAD BASED ON THE CLICK STATE IN THE TUNER GRAPHIC
		tuner.mousedown(function(e){
			var needlePosition = e.pageX-leftMargin-playhead.width()/2;
			moveNeedle(needlePosition); // AFTER THE TUNER HAS BEEN CLICKED, MOVE THE PLAYHEAD GRAPHIC 
				       
		   	changeChannel(); // SIMULATE CHANGING THE CHANNEL
			
		});		
}

// LOAD A RANDOM ARTIST
	function changeArtist(){ //
	
	// CHOOSE ONE OF THE ARTIST RANDOMLY
	var i = Math.floor((Math.random()*artistArray.length)+1); 
	
	// SET ARTIST TEXT WITH THE RANDOM VALUE
	$('.artistName').text(artistArray[i]);	
}

// LOAD A RANDOM STATION
	function changeStation(){
	
	// CHOOSE ONE OF THE STATIONS RANDOMLY
	var i = Math.floor((Math.random()*stationsArray.length)+1); 
	
	// SET ARTIST TEXT WITH THE RANDOM VALUE
	$('.stationName').text(stationsArray[i]);
}

// LOAD A RANDOM SONG
	function changeTitle(){
		
	// CHOOSE ONE OF THE STATIONS RANDOMLY
	var i = Math.floor((Math.random()*titleArray.length)+1); 
	
	// SET ARTIST TEXT WITH THE RANDOM VALUE
	$('.songName').text(titleArray[i]);	
}

// LOAD A RANDOM BACKGROUND
	function changeBackground(){
		
	// CHOOSE ONE OF THE STATIONS RANDOMLY
	var i = Math.floor((Math.random()*90)+1); 
		
	$('.background').css("background-image", "url(images/image"+i+".jpg)").animate({opacity:"1"},500);

}

// SET STATION TO RANDOM ID NUMBER
	function changeStationNumber(){
	
		var i = Math.floor((Math.random()*30)+1);
		
		$('.channelNumber').text(i);
		
	}

// MOVE NEEDLE POSITION
	function moveNeedle(x){
	
	// ANIMATE THE PLAYHEAD TO THE PASSED PARAMETER X
	$('.playhead').animate({ left: x},700, 'easeInOutCubic');
}

// DISPLAY TOAST
	function showToast(i){
	var toast = $('.toast');
	var toastMessage = "Preset";  //add the i
	
	toast.text(toastMessage + " " + i + " added");

	$('.toast').fadeIn(500);
	$('.toast').fadeOut(2000);
}

// SET LOCATION OF TOAST
	function moveToast(x){
	
	// SET VARIABLE TO CENTER THE LABEL ON THE PLAYHEAD
	var offset = x - $('.toast').width()/2; 
	
	// MOVE THE LABLE ACCORDING TO THE OFFSET
	$('.toast').css("margin-left", offset);	
}

// SET PRESETS WHEN TAPPING THE + BUTTON
	function setPreset(){
	
	var presetButton = $('#add'); // GRAB THE ADD BUTTON
	
	var i = 0; // START A COUNTER FOR UNIQUE PRESET LOCATIONS
	
	//CAPTURE THE X POSITION OF THE CLICK WITHIN THE TUNER REGION
	presetButton.click(function(){
		
		//VARIABLES FOR THE FUNCTION
		var playhead = $('.playheadgraphic'); 							// GRAB THE PLAYHEAD ELEMENT
		var leftMargin = parseInt($('.stationInfo').css("left"));		// GET THE LEFT MARGIN OF THE DIV ELEMENT
		var needlePosition = (playhead.offset().left) - leftMargin;		// GET THE LEFT CURRENT POSITION OF THE PLAYHEAD
	
		i++; // increment the counter
		
		//APPEND THE PRESET AFTER THE TUNER DIV
		$('.tuner').append("<div id = \"preset"+i+"\" class=\"preset\"></div>");	// ADD THE PRESET MARK ON THE TUNER HEAD
		
		//SET THE X POSITION OF THE PRESET
		$( ".preset:last" ).css("left", needlePosition);				//SET THE LOCATION OF THE PRESET MARK		
		
		moveToast(needlePosition);  		// CHANGE LOCATION OF TOAST
		showToast(i); 	// DISPLAY TOAST AFTER PRESET
		
	});
}

// POPULATE THE CHANNEL PICKER
	function channelPicker(){

		// Loop that adds individual items to the menu
		for ( var i = 0; i < stationsArray.length; i++ ) {
		   $('.channelPicker').append("<p class = \"channels\">"+ stationsArray[i] +"</p>");
		}
	}
	
// FUNCTION TO HANDLE THE SELECTION OF THE CHANNEL PICKER
	function selectStation(x){
		$('.stationName').text(x);
	};	

// Returns a random integer between min and max
	function getRandomInt(min, max) {
  		return Math.floor(Math.random() * (max - min + 1)) + min;
}
	
// EVENTS ON THE CHANNEL PICKER
	function channelPickerFunctions(){
		
		// FADE THE PICKER IN
		$('.station').mousedown(function(){
			$('.channelPicker').fadeIn("fast");
		});
		
		// FADE THE STATION PICKER OUT	
		$('.overlay').click(function(){
			$('.channelPicker').fadeOut("fast");
		});
		
		// STATION PICKER SELECT FUNCTION
		$('.channels').click(function(){
			
			// GET THE VALUE OF THE SELECTED STATION
			var channel = $(this).text();
			
			// SET THE VALUE OF THE STATION
			$('.stationName').text(channel);

		});
		
		// ACTIONS THAT HAPPEN ONCE A CHANNEL HAS BEEN SELECTED
		$('.channelPicker').mousedown(function(){
			$('.channelPicker').fadeOut("fast");
			
			// CHANGE THE BACKGROUND TO A RANDOM ALBUM
			changeBackground();
			
			// CHANGE THE ARTIST TO A RANDOM ARTIST
			changeArtist();
			
			// MOVE THE NEEDLE			
			moveNeedle(getRandomInt(44,900));
		});
	}

// HOVER STATE OF STATION PICKER
	function stationHover(){
		
		$('.station').hover(function(){
			$('.stationName').toggleClass('stationNameHover');
			})
	};
	
	
	
// DRAG THE PAGE CONTENT
	function dragContent(){
		$('.stationInfo').draggable();
	};
	
// TEST FUNCTION
	function tempMessage(x){
		console.log(x);
	}
	
// LEFT AND RIGHT ARROW FUNCTIONS
	function keyPressEvents(){
		
		$(document).keydown(function(e){
		
		// LEFT KEY EVENTS
	    if (e.keyCode == 37) { 
	       
	       // GET THE CURRENT X POSITION OF PLAYHEAD
	       var playheadX = $('.playhead').offset().left;
	       
	       // MOVE THE PLAYHEAD TO THE LEFT ONE CLICK
	       $('.playhead').offset({left: playheadX-10 })	
	       
	       	// SIMULATE CHANGING THE CHANNEL
		   	changeChannel();    
		  }

		
		
		// RIGHT KEY EVENTS

	    if (e.keyCode == 39) { 
	       
	       // GET THE CURRENT X POSITION OF PLAYHEAD
	       var playheadX = $('.playhead').offset().left;
	       
	       // MOVE THE PLAYHEAD TO THE RIGHT ONE CLICK
	       $('.playhead').offset({left: playheadX+10 })

	       
	       // SIMULATE CHANGING THE CHANNEL
		   	changeChannel();      
		  }
		
		// UP KEY EVENTS
		if (e.keyCode == 38) {
		
			//FADE THE VOLUME BUTTON OUT	
			$('#volume').css('opacity','0');
			
			//FADE THE SLIDER IN
			$('.volume').fadeIn("fast");
			
			//MOVE VOLUME SLIDER UP
			var volSliderY = $('.volumeKnob').offset().top; 
			
			$('.volumeKnob').offset({top: volSliderY-5 });
			
		}
		
		//
		// DOWN KEY EVENTS
		if (e.keyCode == 40) {
		
			//FADE THE VOLUME BUTTON OUT	
			$('#volume').css('opacity','0');
			
			//FADE THE SLIDER IN
			$('.volume').fadeIn("fast");
			
			//MOVE VOLUME SLIDER DOWN
			var volSliderY = $('.volumeKnob').offset().top; 
			
			$('.volumeKnob').offset({top: volSliderY+5 });
		}
		
		});
		
		
	}
	

	
	
// SIMULATES CHANGING CHANNELS	
	function changeChannel(){
		changeArtist(); 	// CHANGE THE ARTIST
		changeStation(); 	// CHANGE THE STATION
		changeTitle(); 		// CHANGE THE SONG
		changeBackground();	// CHANGE THE BACKGROUND
		changeStationNumber(); // CHANGE THE STATION NUMBER
	}

		
// RUN THESE FUNCTIONS ONCE THE PAGE LOADS		
		launchsplashScreen(30);  // LOAD THE SPLASH SCREEN
		loadingGraphic();     // DRAWS THE FAKE PROGRESS BAR
		//drawRidges(); 		  // DRAW RIDGES IN THE TUNER BAR
		writeStations()       // WRITE STATION LABELS UNDER TUNER BAR
		writeLabels();	// WRITE THE LABELS IN THE RIGHT HAND HIDDEN MENU
		sideMenu();		// SIDE MENU FUNCTIONALITY
		mouseEvents();	// SET THE MOUSE EVENTS
		dragPlayhead()  // ALLOWS PLAYHEAD TO BE DRAGGABLE
		clickToTune(); 	// CLICK TO TUNE FUNCTION	
		setPreset(); 	// SET PRESETS WHEN TAPPING THE + BUTTON
		channelPicker();	// CREATES THE CHANNEL POP UP
		channelPickerFunctions(); //MOUSE EVENTS ON THE CHANNEL PICKER
		stationHover(); 	// HOVER STATE ON THE STATION DROPDOWN
		keyPressEvents();	// ENABLES LEFT RIGHT KEY CHANGE FOR CHANNELS
});	