//setting up the x spacing
let circleSpaceX = 100, circleSpaceY = 100, diam = 80;
//setting up the y specing
let squareSpaceX = 10, squareSpaceY = 60, s = 20;


//canvas setup
function setup() {
    createCanvas(600, 600);
    angleMode(DEGREES);
    background(133, 51, 83); //purple
    
}

function draw() {
    //creating square pattern 
    //determines the horizontal rows
    for (let x = 0; x < width; x += squareSpaceX) {
        //determines the horizontal columns
        for (let y = 20; y < height; y += squareSpaceY) {
            //creating interaction with mouse 
            let d = dist(mouseX, mouseY, x, y);
            //creating conditional that if squares within 100px of will be red 
            if (d < 100) {
                fill(10, 36, 99); //blue
            } else { //else the squares will be filled white
                fill(239, 100, 97); //pink
            }
            square(x, y, s);
        }
    }

    //creating circle pattern 
    //determines the horizontal rows
    for (let x = 100; x < width; x += circleSpaceX)  {
        //determines the vertical columns
        for (let y = 100; y < height; y += circleSpaceY) {
             //creating interaction with mouse 
             let d = dist(mouseX, mouseY, x, y);
             //creating conditional that if circles within 100px of will be red 
             if (d < 100) {
                 fill(239, 100, 97); //pink
             } else { //else the circles will be filled white
                 fill(10, 36, 99); //blue 
             }
            ellipse (x, y, diam);
        }
    }
}
