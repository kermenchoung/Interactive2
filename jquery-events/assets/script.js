$(document).ready(function(){
	
	var scrollPos;
	var xPos;
	var yPos;
	

	// check when the user scrolls
	$(window).scroll(function(){ 
		
		// update the scroll position variable
		scrollPos = $('body').scrollTop();
		
		// update the web page with the variables value
		$('#scroll-pos').html("scroll: " + scrollPos);
	});


	// check when the mouse moves
	$(document).mousemove(function(e){
		
		// update mouse x and y position
		xPos = e.pageX;
		yPos = e.pageY;
		$('#mouse-pos').html('x-pos: ' + xPos + '<br />y-pos: ' + yPos);

		// change div with the id "element"s CSS when you move your mouse 
		$('#element').css({
			'transform' : 'rotate(' + xPos + 'deg) scale(' + xPos/100 + ')',
			'background-color' : 'rgb('+ yPos/5 + ', ' + xPos/3 + ', ' + (xPos*yPos)	/10 + ')',
		});
	});


	
	
	


});

draw=function() {
 

  colorMode(HSB, 360, 100, 100);
  rectMode(CENTER); 
  noStroke();
  background(mouseY/2, 100, 100);

  fill(360-mouseY/2, 100, 100);
  rect(200, 200, mouseX+1, mouseX+1);

  
  };
