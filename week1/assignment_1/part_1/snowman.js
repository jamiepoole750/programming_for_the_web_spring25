let stroke1 = prompt ("What basic color should the snowman be?", "gray");
let fill1 = prompt ("what basic color should the carrot nose be?", "gray");

function setup() {
    createCanvas (1000, 800);
    background("#ccc");
}

function draw() {
    // snowman 
    fill ("f1f1f1");
    strokeWeight(20);
    stroke(stroke1);
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
    stroke("black");
    strokeWeight(30);
    strokeCap(SQUARE);
    line (380, 180, 620, 180);
    // hat body
    fill("black");
    quad(430, 50, 570, 50, 570, 150, 430, 150);
    // hat trim
    stroke("blue");
    strokeWeight(15);
    line(415, 140, 585, 140);
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
    fill(fill1);
    noStroke();
    triangle(500, 250, 650, 260, 500, 280);
    ellipse(500, 265, 30);
}