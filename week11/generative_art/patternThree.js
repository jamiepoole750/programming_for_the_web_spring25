function setup() {
    createCanvas(600, 600);
    background(0);
}

function draw() {
    noStroke();
    translate(width / 2, height / 2); //centering loop and ellipse on canvas

    //loops of random sizes, colors, and locations of circles
    for (let i = 0; i < 50; i++) {
        let angle = random (TWO_PI); //random angle
        let distance = random(100, 300); //distance from center

        //color variables of rect
        let r = 201;
        let g = random(171);
        let b = random(0);
        let a = random(75);

        //width and height variables of rect
        let w = random(10);
        let h = random(300);

        push();
        rotate(angle); //rotating direction of rects to face outward
        translate(distance, 0);
        fill(r, g, b, a);
        rect(0, 0, w, h); //plugging in variables to create rects
        pop();
    }

    //creating circle in the middle of canvas 
    fill((201), random(171), random(0), random(50));
    ellipse(0, 0, 400);

    frameRate(5); //how many times ellipse repeats per second
}