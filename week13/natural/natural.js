var pos;
var inc;

//creating northern lights
function setup() {
    createCanvas(600, 600);
    //setting variable to p5
    angleMode(DEGREES);
    //creating variable called position
    pos = 0.0; 
    //inc is the amount to increase position
    inc = 1.0; //determine frequency of sin value 
}



function draw() {
    background('#B2D9E6');
    var mySinVal = sin(pos);
    amplified = mySinVal * 20;

    translate(0, 700);
    noStroke();

    for (let x = 0; x <= width; x += 5) {
        //creating the wavy hill affect
        let waveTop = sin(amplified - x) * 5; //top of wave
        let lineHeight = 490 + sin(pos + x * 1) * 20;

        //create hill
        fill(0, 158, 181); //green blue
        rect(x, waveTop, x, waveTop - lineHeight);
    }


    for (let x = 0; x <= width; x += 5) {
        //creating the wavy hill affect
        let waveTop = sin(amplified - x) * 5; //top of wave
        let lineHeight = 460 + sin(pos + x * 1) * 10;

        //creating hill
        fill(0, 138, 183); //blue
        rect(x, waveTop, x, waveTop - lineHeight);
    }

    for (let x = 20; x <= width; x += 5) {
        //creating the wavy hill affect
        let waveTop = sin(amplified - x) * 5; //top of wave
        let lineHeight = 425 + sin(pos + x * 1) * 30;
       
        //creating hill
        fill(0, 61, 96); //dark blue
        rect(x, waveTop, x, waveTop - lineHeight);
    }

    pos = pos + inc;
}

