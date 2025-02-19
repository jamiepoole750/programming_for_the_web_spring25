//variables
let bubble = []; //creating an array
let numBubble = 10; //defining number of new bubbles on canvas 

//setting up canvas
function setup() {
    createCanvas(600, 400);
    bubble = new Bubble();
    for (let i = 0; i < numBubble; i++) { //creating for loop
        bubble[i] = new Bubble(); //calling name of empty array and store a new bubble
    }
}

//draw a number instances of class Bubble on canvas 
function draw() {
    background(0);
    for (let i = 0; i < numBubble; i++) { //calling for loop in draw function
        bubble[i].move(); //attaching .move to array
        bubble[i].show(); //attaching .show to array
    }
}

class Bubble { //creating the class proporty
    constructor() { //constructor defining bubble with x and y coordinates
        this.x = 200;
        this.y = 150;
    }
    move () { //creating functionality inside bubble class
        this.x = this.x + random(-5, 5); 
        this.y = this.y + random(-5, 5); 
    } 
    show () { //drawing the bubble
        stroke(255);
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, 40, 40);
    }
}



