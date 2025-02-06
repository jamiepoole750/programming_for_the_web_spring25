//setting up canvas
function setup() {
    createCanvas(600, 600);
}

function createTile(originX, originY, primaryColor, secondaryColor, thirdColor, scaleCircle) {
    translate(originX, originY);
    fill(primaryColor);
    rect(0, 0, 200, 200);
    stroke(thirdColor);
    strokeWeight(2);
    
    //half circles on edge of tile
    fill(secondaryColor);
    arc(100, 0, 50, 50, 0, 1 * PI); //top half circle
    arc(200, 100, 50, 50, 0.5 * PI, 1.5 * PI);  //right half circle
    arc(100, 200, 50, 50, 1 * PI, 0); //bottom half circle
    arc(0, 100, 50, 50, 1.5 * PI, 0.5 * PI); //left half circle

    //diagonal square
    quad(100, 45, 155, 100, 100, 155, 45, 100);

    //four large triangles
    fill(thirdColor);
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
    fill(primaryColor);
    ellipse(100, 100, scaleCircle);
}

function draw(){
    createTile(0, 0, '#E07BE0', '#420039', '#932F6D', 80, 80);
    createTile(0, 200, '#420039', '#932F6D', '#E07BE0', 20, 20);
    createTile(0, 200, '#932F6D', '#E07BE0', '#420039', 60, 60);
    createTile(200, -400, '#420039', '#932F6D', '#E07BE0', 20, 20);
    createTile(0, 200, '#932F6D', '#E07BE0', '#420039', 60, 60);
    createTile(0, 200, '#420039', '#932F6D', '#E07BE0', 20, 20);
    createTile(200, -400, '#932F6D', '#E07BE0', '#420039', 60, 60);
    createTile(0, 200, '#420039', '#932F6D', '#E07BE0', 20, 20);
    createTile(0, 200, '#E07BE0', '#420039', '#932F6D', 80, 80);
}