//variables
let blockX = 0;
let blockY = 0;
let blockColor = 255;
let drawTimer;
const speed = 10; //const because it won't be changed
const distance = 2;

function setup() {
    createCanvas(500, 500);
    background(0);
}

//create a function that draws a square in a specific location
// fill color and location should be function parameters
function drawBlock(rectX, rectY, rectColor) {
    fill(rectColor || 255); //will use the rectColor parameter set but if it doesn't exist it will use the 255
    rect(rectX, rectY, 50, 50);
}

//keyTyped to change color of block
function keyTyped() {
    let keyToNumber = Number(key); //converting to a number
    if (isNaN(keyToNumber)) { //if a number isn't pressed it is just returned and converted to 1 between 255
        return;
    }
    keyToNumber = map(keyToNumber, 1, 9, 1, 255);
    console.log ('converted number', keyToNumber);
    blockColor = keyToNumber; //reassign blockColor to keytoNumber
}

//alert to let user know what to do 
window.alert('Use the number keys (0-9) to create a pattern!')

//create a setInterval to draw block
window.setTimeout(() => {
    drawTimer = window.setInterval(() => {
        if (blockY - 50 <= height) {
            drawBlock(blockX, blockY, blockColor); //creates the block and will continue to exequte the function until it is cleared
            blockY += distance; //taking the value of blockY and adding the distance value to it 
        } else {
            blockY = 0; //resetting blockY
            blockX += 50; //creating another column 
        }
        
        if (blockY -50 > height && blockX - 50 > width) { //reseting the interval to stop drawing once it is outside the bounds of the canvas
            window.clearInterval(drawTimer); //cancels the timer
            alert('Your pattern is done!');
        }
    }, speed); // () => {} is creating an anonymous function -- 50 is the interval in milliseconds
}, 1500);



