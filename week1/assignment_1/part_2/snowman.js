let grid = undefined;
let fill1 = prompt("What basic color hat should the snowman wear?", "gray");
let fill2 = prompt("What basic color scarf should the snowman have?", "gray");


function setup() {
    createCanvas(1000, 800);
    background(173, 216, 230);
}

function draw () {
    //trees
    stroke("brown");
    line(50, 500, 50, 750); // tree base 1
    line(120, 450, 120, 750); // tree base 2
    line (900, 500, 900, 750); //tree base 3
    noStroke();
    fill("green");
    triangle(0, 520, 100, 520, 50, 400); //tree 1
    triangle(50, 500, 200, 500, 120, 300); //tree 2
    triangle(850, 580, 950, 580, 900, 350); //tree 3

    //snow
    stroke(255);
    strokeWeight(20);
    point (302, 100);
    point (708, 200);
    point (50, 300);
    point (900, 320);
    point (800, 50);
    point (850, 500);
    point (300, 550);
    point (100, 50);
    point (930, 150);

    //snowy hills
    fill("white");
    ellipse(100, 800, 800, 500); //left hill
    ellipse(500, 800, 600, 500); //middle hill
    ellipse(900, 800, 450, 400); //right hill
    // snowman 
    fill ("f1f1f1");
    strokeWeight(20);
    stroke("black");
    // base of body
    ellipse(500, 700, 400);
    // middle body
    ellipse(500, 450, 300);
    // head
    ellipse(500, 250, 200);
    //left arm
    line(350, 400, 200, 300);
    line(250, 320, 270, 280); //left hand
    //right arm
    line(650, 400, 800, 300);
    line(750, 320, 730, 280); //right hand
    // hat brim
    stroke(fill1);
    strokeWeight(30);
    strokeCap(SQUARE);
    line (380, 180, 620, 180);
    // hat body
    fill(fill1);
    quad(430, 50, 570, 50, 570, 150, 430, 150);
    // hat trim
    stroke("blue");
    strokeWeight(15);
    line(415, 140, 585, 140);
    //scarf 
    stroke(fill2);
    fill(fill2);
    quad(410, 330, 570, 450, 520, 480, 400, 340); //left scarf
    quad(590, 330, 390, 450, 450, 480, 600, 340); //right scarf
    // eyes
    stroke(0);
    strokeWeight(30);
    point (450, 230);
    point (550, 230);
    // mouth
    noFill();
    strokeWeight(8);
    arc(500, 290, 50, 50, TWO_PI, PI);
    // nose
    fill("orange");
    noStroke();
    triangle(500, 250, 650, 260, 500, 280);
    ellipse(500, 265, 30);




}