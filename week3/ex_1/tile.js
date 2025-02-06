//setting up canvas
function setup() {
    createCanvas(200, 200);
}

function createTile() {
    translate(0, 0);
    fill('green');
    rect(0, 0, 200, 200);
    stroke('white');
    strokeWeight(2);
    
    //half circles on edge of tile
    fill('pink');
    ellipse(100, 0, 50, 50); //top half circle
    ellipse(200, 100, 50, 50);  //right half circle
    ellipse(100, 200, 50, 50); //bottom half circle
    ellipse(0, 100, 50, 50); //left half circle

    //diagonal square
    quad(100, 45, 155, 100, 100, 155, 45, 100);

    //four large triangles
    fill('white');
    triangle(30, 30, 100, 90, 90, 100); //top left triangle
    triangle(170, 30, 100, 90, 110, 100); //top right triangle
    triangle(170, 170, 100, 90, 90, 100); //bottom right triangle
    triangle(30, 170, 100, 90, 110, 100); //bottom left triangle

    //arc corners
    arc(0, 0, 80, 80, 0, HALF_PI); //top left arc
    arc(200, 0, 80, 80, 0.5 * PI, 1 * PI); //top right arc
    arc(0, 200, 80, 80, 1.5 * PI, 0); //bottom left arc
    arc(200, 200, 80, 80, 1 * PI, 1.5 * PI); //bottom right arc

    //center circle
    fill('green');
    ellipse(100, 100, 40, 40);
}

function draw(){
    createTile();
    noLoop();
}