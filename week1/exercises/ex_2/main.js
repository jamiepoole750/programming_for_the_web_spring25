 //Tried to make it look like you're coloring in a basketball
 function setup() {
    createCanvas(600, 600);
  }
 
function draw() {
    strokeWeight(0); //set stroke weight to zero
    
    if (mouseIsPressed) { 
        fill (255, 165, 0); //set fill to orange
    } else {
        fill(255); //set fill to white
    }
    ellipse(mouseX, mouseY, 80, 80);

    strokeWeight(10); //set stroke weight to 10

    line (0, 300, 600, 300); //x-axis line
    line (300, 600, 300, 0);

    noFill();
    ellipse(750, 300, 600, 600); //right side circle

    noFill();
    ellipse(-150, 300, 600, 600); //left side circle
  }