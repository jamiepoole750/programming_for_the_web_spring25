let rectX = 0; //assigning 0 to a variable
const rectHeight = 75; //defining rectHeight
let rectY; 
const rectWidth = 75; //assigning 75 to a variable
let clickCount = 0; //resetting the click count and assigning it to a variable
let speed;
let text;
//setting up the canvas
function setup() {
    createCanvas(500, 500); 
    rectY = random(height - rectHeight); //randomizing height of blue rect
    speed = random(1, 3); //setting up speed of blue rect
}

function draw() {
    background('pink');
    drawShape();
    rectX += speed; //animating to the right
    //stopping the animation once rect leaves the canvas
    if (rectX > width) {
        noLoop();
        text('Your score was ' + clickCount, 200, 250); //displaying number of clicks by user
    }
}

//using mousePressed to detect the hit
function mousePressed() {
    if((mouseX >= rectX && mouseX <= rectX + rectWidth) && (mouseY >= rectY && mouseY <= rectY + rectHeight)) {
        clickCount++; //number of clicks +1
        console.log('hit', clickCount); //tracking the number of clicks in console
    }
}
//creating smaller rect element to animate
function drawShape() {
    fill('blue');
    rect (rectX, rectY, rectWidth, rectHeight);
}