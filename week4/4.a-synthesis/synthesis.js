//creating variables for the rectangle
const rectangle = 100;
let startingX = 120; //starting x position for first rect
let startingY = 200; //starting y position for first rect
let rectHeight = 170; //defining the length for all rectangles
let rectWidth = 120; //defining the width for all rectangles
let myRects = [] //setting up arrays for myRects 

//setting up canvas
function setup() {
    createCanvas(1100, 900);
    background('#1A254A');
    for (let k = 0; k < 3; k++) { // 4 additional rows of rectangles
        for (let i = 0; i < 6; i++) { // first row of rectangles
            rect(startingX, startingY, rectWidth, rectHeight); //defining rect with variables from above
            myRects.push ({ x: startingX, y: startingY, id: i }); //defining myRects array values/reference for the rects as they are created
            startingX += 150; //adding +150px of space between each additional column rectangles
        }
        startingY += 200; //adding +200px of space between each additional row of rectangles
        startingX = 120; //readjusting the startingX vale of each row back to 400
    }
    
    console.log(myRects); //display myRects array values in console
}

