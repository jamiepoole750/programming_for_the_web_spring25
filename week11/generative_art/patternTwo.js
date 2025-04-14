function setup() {
    createCanvas(600, 600);
    background(0);
}

function draw() {
    noStroke();

    //loops of random sizes, colors, and locations of circles
    for (let i = 0; i < 800; i++) {
        //color variables of purple rects
        let r = random(133);
        let g = random(6);
        let b = random(153);
        let a = random(100);

        //width and height variables of rect
        let w = random(5);
        let h = random(200);

        push();

        fill(r, g, b, a);
        rect(random(600), random(100), w, h); //plugging in variables to create rects
        pop();
    }

    for (let i = 0; i < 700; i++) {
        //color variables of dark blue rects
        let r = random(0);
        let g = random(127);
        let b = random(225);
        let a = random(50);

        //width and height variables of rect
        let w = random(5);
        let h = random(200);

        push();

        fill(r, g, b, a);
        rect(random(600), random(300), w, h); //plugging in variables to create rects
        pop();
    }

    for (let i = 0; i < 600; i++) {
        //color variables of light teal rects
        let r = random(57);
        let g = random(225);
        let b = random(176);
        let a = random(100);

        //width and height variables of rect
        let w = random(5);
        let h = random(200);

        push();

        fill(r, g, b, a);
        rect(random(600), random(400), w, h); //plugging in variables to create rects
        pop();
    }

    for (let i = 0; i < 100; i++) {
        //color variables of green rects
        let r = random(0);
        let g = random(239);
        let b = random(99);
        let a = random(50);

        //width and height variables of rect
        let w = random(10);
        let h = random(400);

        push();

        fill(r, g, b, a);
        rect(random(600), random(500), w, h); //plugging in variables to create rects
        pop();
    }

    frameRate(10); //how many times ellipse repeats per second
}