//oscillation using sin 

//setting up position variable
var pos; 

function setup() {
    createCanvas(500, 500);
    background('#222A68');
    //setting variable to p5
    angleMode(DEGREES)
    //creating variable called position
    pos = 0.0; 
    //inc is the amount to increase position
    inc = 3.0; //determine frequency of sin value 
 
}

function draw() {

    translate(width/2, height/2) //start drawing from the middle of the canvas

    var mySinVal = sin(pos);
    amplified = mySinVal * 50

    //for loop will go around as many times as 10 will fit into 360
    for (x=0; x <= 250; x = x + 5) {
        fill('#574AE2');
        stroke('#222A68');
        strokeWeight(8);
        ellipse(10, 0, 500, mySinVal * 20);
        rotate(x);
    }

    pos = pos + inc;
}