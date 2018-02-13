
  
var sketchProc = function(processingInstance) {
     
with (processingInstance) {
        
 size(720, 720);
        
draw=function() {
 

  colorMode(HSB, 360, 100, 100);
  rectMode(CENTER); 
  noStroke();
  background(mouseY/2, 100, 100);

  fill(360-mouseY/2, 100, 100);
  rect(360, 360, mouseX+1, mouseX+1);

  
  }
/ WRITE YOUR PROGRAM CODE HERE  



//YOUR JS PROGRAM CODE ENDS HERE.
}};  
// Get the canvas that Processing-js will use
    
var canvas = document.getElementById("mycanvas"); 
  
  // Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
    
var processingInstance = new Processing(canvas, sketchProc); 