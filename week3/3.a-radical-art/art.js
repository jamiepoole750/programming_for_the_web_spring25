//Canvas setup 
function setup() {
    createCanvas(600, 600);
    background(0);
    angleMode(DEGREES);
}

//Rotates the coordinate system out further during each rotation
let angle = 150 * 0.5;
//Spirogrpah x and y coordinates
let originX = 300;
let originY = 300;

//Spirograph basic design/setup
function makeArm(rotateBy, primaryColor, secondaryColor) {
    let alt = Math.round(rotateBy / 600);
    console.log(alt);
    //small circles
    noFill();
    stroke(primaryColor); //warm tone purple 
    strokeWeight(1);
    ellipse(100, 25 + alt, 100 - alt);
    //large circles
    stroke(secondaryColor) //cobalt blue
    ellipse(100, 100 + alt, 200 - alt);
}

//creating two spirographs  
function draw() {
    translate(originX, originY);
    rotate(angle);
    makeArm(angle, '#5E0B15', '#454ADE');
    angle += 150 * 0.5;
}

//Mouse pressed to stop the loop
function mousePressed() {
    noLoop();
}



