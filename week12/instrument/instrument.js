//make p5.js sketch behave like musical isntrument
//sketch must include p5.js audio library extension
//should react to some form of user input 

let canvas;

//creating variables for rectangle
let rectanglesOne = [];
let circlesOne = [];
let rectanglesTwo = [];
let rectanglesThree= [];


//variables for sound 
let songs = [];


function setup() {
    canvas = createCanvas(600, 600); 
    songs.push(createAudio('sound/a6.mp3')); 
    songs.push(createAudio('sound/g6.mp3'));
    songs.push(createAudio('sound/f6.mp3')); 
    songs.push(createAudio('sound/c6.mp3'));
}

function draw() {
    background('#FEC0AA'); //pale pink
    
    //setting up rectangles
    fill('#EC4E20'); //orange
    noStroke();
    for (let r of rectanglesOne) {
        rect(r.x, r.y, r.w, r.h);
    }
    
    //setting up second rects
    fill('#CBA328'); //yellow gold
    for (let n of rectanglesTwo) {
        rect(n.x, n.y, n.w, n.h);
    }

    //setting up third rects 
    fill('#84732B'); //olive green
    for (let d of rectanglesThree) {
        rect(d.x, d.y, d.w, d.h)
    }

    //setting up circles
    fill('#104547'); //dark teal blue
    for (let c of circlesOne) {
        ellipse(c.x, c.y, c.w, c.h)
    }
}

function keyPressed() {
    //drawing rects when the key a is pressed
    if (key === 'a') { 
        let rectOneW = random (100, 50); //defining width
        let rectOneH = random (100, 20); //defining height
        let rectOne = { 
             //randomizing the x,h,w when the a key is pressed
             x: random(width), //drawing across x-axis
             y: random(height - 200), //only drawing after 200 on y-axis
             w: rectOneW, //randoming the width 
             h: rectOneH//randoming the height 
        };
        rectanglesOne.push(rectOne);
        
        //if key a is pressed note with play 
        if (songs[0]) {
            //adjusting volume based on size of rectangles
            let area = rectOneW * rectOneH; 
            let volume = map(area, 1000, 10000, 0.2, 1.0);
            volume = constrain (volume, 0.2, 1.0);
            songs[0].volume(volume);
            songs[0].stop(); //stop note if already playing
            songs[0].play(); //play note from beginning
        } 
    }

     //drawing rects when the key f is pressed
     if (key === 'f') { 
        let rectTwoW = random(10, 50); //defining width
        let rectTwoH = random(10, 200); //defining height
        let rectTwo = {
            //randomizing the x,h,w when the d key is pressed
            x: random(width), //drawing across x-axis
            y: 150, //set y axis
            w: rectTwoW, //randoming the width 
            h: rectTwoH //randoming the height 
        };
        rectanglesTwo.push(rectTwo);

        //if key f is pressed note with play 
        if (songs[1]) {
            //adjusting volume based on size of rectangles
            let area = rectTwoW * rectTwoH; 
            let volume = map(area, 1000, 10000, 0.2, 1.0);
            volume = constrain (volume, 0.2, 1.0);
            songs[1].volume(volume);
            songs[1].stop(); //stop note if already playing
            songs[1].play(); //play note from beginning
        } 
    }

    //drawing rects when the key j is pressed 
    if (key === 'j') { 
        let rectThreeW = random(10, 50); //defining width
        let rectThreeH = random(10, 200); //defining height
        let rectThree = {
            //randomizing the x,h,w when the d key is pressed
            x: random(width), //drawing across x-axis
            y: 400, //set y axis
            w: rectThreeW, //randoming the width 
            h: rectThreeH //randoming the height 
        };
        rectanglesThree.push(rectThree);

        //if key j is pressed note with play 
        if (songs[2]) {
            //adjusting volume based on size of rectangles
            let area = rectThreeW * rectThreeH; 
            let volume = map(area, 1000, 10000, 0.2, 1.0);
            volume = constrain (volume, 0.2, 1.0);
            songs[2].volume(volume);
            songs[2].stop(); //stop note if already playing
            songs[2].play(); //play note from beginning
        } 
    }

    //drawing circles when the key s is pressed
    if (key === 'w') {
        let circOne = {
            //randomizing the x,h,w when the w key is pressed
            x: random(width), //drawing across x-axis
            y: random (height), //drawing up until 250 on y-axis
            w: 20, //set width 
            h: 20 //set height
        };
        circlesOne.push(circOne);

        //if key w is pressed note with play 
        if (songs[3]) {
            songs[3].stop(); //stop note if already playing
            songs[3].play(); //play note from beginning
        } 
        }

    //erasing canvas 
    if (key === 'x') {
        rectanglesOne = [];
        rectanglesTwo = [];
        rectanglesThree= [];
        circlesOne = [];
    }
}




