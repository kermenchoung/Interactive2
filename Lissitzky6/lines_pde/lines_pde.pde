
/**
 * pixel mapping. each pixel is translated into a new element
 * 
 * MOUSE
 * position x/y        : various parameters (depending on draw mode)
 * 
 * KEYS
 * 1-9                 : switch draw mode
 * s                   : save png
 * p                   : save pdf
 */
 
 /* @pjs preload="pic.png"; */


PImage img;
int drawMode = 5;


void setup() {
  size(603, 873); //size should be multiple of img width and height

  img = loadImage("images/pic.png");
  
}


void draw() {
 
  background(255);

  float mouseXFactor = map(mouseX, 0,width, 0.05,1);
  float mouseYFactor = map(mouseY, 0,height, 0.05,1);
  int skip = 2;

  for (int gridX = 0; gridX < img.width; gridX++) {
    for (int gridY = 0; gridY < img.height; gridY++) {
      // grid position + tile size
      float tileWidth = width / (float)img.width;
      float tileHeight = height / (float)img.height;
      float posX = tileWidth*gridX;
      float posY = tileHeight*gridY;

      // get current color
      color c = img.pixels[gridY*img.width+gridX];
      // greyscale conversion
      int greyscale =round(red(c)*0.222+green(c)*0.707+blue(c)*0.071);

      switch(drawMode) {
      
      case 5:
        // greyscale to line relief
        float w5 = map(greyscale,0,255,5,0.2);
        strokeWeight(w5 * mouseYFactor + 0.1);
        // get neighbour pixel, limit it to image width
        color c2 = img.get(min(gridX+1,img.width-1), gridY);
        stroke(c2);
        int greyscale2 = int(red(c2)*0.222 + green(c2)*0.707 + blue(c2)*0.071);
        float h5 = 50 * mouseXFactor;
        float d1 = map(greyscale, 0,255, h5,0);
        float d2 = map(greyscale2, 0,255, h5,0);
        line(posX-d1, posY+d1, posX+tileWidth-d2, posY+d2);
        break;
      
      }

    }
  }

  
}