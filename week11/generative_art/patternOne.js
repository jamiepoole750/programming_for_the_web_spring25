function setup() {
    createCanvas(600, 600);
    background(0);
}

function draw() {
    noStroke();

    //loops of random sizes, colors, and locations of circles
    for (let i = 0; i < 100; i++) {
        //color variables of red/purple circles
        let r = random(250);
        let g = random(100);
        let b = random(100);
        let a = random(75);

        //width and height variables of circle
        let w = random(20);
        let h = random(20);

        push();

        fill(r, g, b, a);
        ellipse(random(200), random(600), w, h); //plugging in variables to create circles
        pop();
    }
   
    for (let i = 0; i < 1000; i++) {
        //color variables of blue circles
        let r = random(100);
        let g = random(50);
        let b = random(250);
        let a = random(250);

        //width and height variables of circle
        let w = random(20);
        let h = random(20);

        push();

        fill(r, g, b, a);
        ellipse(random(600), random(600), w, h); //plugging in variables to create circles
        pop();
    }


    for (let i = 0; i < 200; i++) {
        //color variables of yellow circles
        let r = random(201);
        let g = random(171);
        let b = random(0);
        let a = random(100);

        //width and height variables of circles
        let w = random(30);
        let h = random(30);

        push();

        fill(r, g, b, a);
        ellipse(random(600), random(600), w, h); //plugging in variables to create circles
        pop();
    }
    
    frameRate(10); //how many times ellipse repeats per second
}