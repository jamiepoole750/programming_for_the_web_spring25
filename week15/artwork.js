//defining each color 
let blue = '#AACCD5';
let teal = '#023E40';
let pink = '#F7BBBE';
let red = '#E3363C';
let yellow = '#F3B21A';
let lightTeal = '#86C1B3';
let lightYellow = '#FDF6D4';

//creating an array for all piano key sounds and corresponding keywork key letter
const pianoSounds = {
   a: "sounds/f3.mp3", 
   s: "sounds/g3.mp3",
   d: "sounds/a3.mp3", 
   f: "sounds/b3.mp3",
   g: "sounds/c4.mp3", 
   h: "sounds/d4.mp3",
   j: "sounds/e4.mp3", 
   k: "sounds/f4.mp3",
   l: "sounds/g4.mp3", 
   w: "sounds/eb3.mp3",
   e: "sounds/gb3.mp3", 
   r: "sounds/ab3.mp3",
   t: "sounds/bb3.mp3",
   y: "sounds/db4.mp3", 
   u: "sounds/eb4.mp3",
   i: "sounds/gb4.mp3", 
   o: "sounds/ab4.mp3"
};

//creating button to display & erase artwork
let buttonEraseArtwork;
let buttonDisplayArtwork;

//creating variable for artwork to be displayed & erased
let eraseArtwork = true;
let displayArtwork = false;

const circleArray = [];
const keysPressed = new Set();

document.addEventListener("keydown", function(event) {
    const key = event.key.toLowerCase();
    keysPressed.add(key);
})

document.addEventListener("keyup", function(event) { 
    const key = event.key.toLowerCase(); //ensuring it will only play when lowercased keys are pressed
    
    const soundPath = pianoSounds[key];
    //lets the audios play at the same time, overlapping each other
    if (soundPath) {
        const audio = new Audio(soundPath);
        audio.currentTime = 0;
        audio.play();
    }

    //defining the x and y to be in random positions 
    let x = random(0, 1000);
    let y = random (0, 550);

    //changing the size of circles
    let circleSize = 70; //creating default circle size 

    //increasing circle size when w-t are pressed
    const increaseCircleSize = ['w', 'e', 'r', 't'];
    //decreasing circle size when y-o are pressed
    const decreaseCircleSize = ['y', 'u', 'i', 'o'];

    const increaseSize = [...keysPressed].filter(k => increaseCircleSize.includes(k)).length;
    const decreaseSize = [...keysPressed].filter(k => decreaseCircleSize.includes(k)).length;

    circleSize += 50 * increaseSize;
    circleSize -= 20 * decreaseSize;

    //changing the color of the circles based on if a top or middle row key was pressed
    let circleColors;

    //creating guidelines for circle colors and pairings
    const blueCircle = {outer: blue, middle: yellow, center: teal, stroke: lightYellow};
    const tealCircle = {outer: teal, middle: lightTeal, center: red, stroke: lightYellow};
    const pinkCircle = {outer: pink, middle: red, center: yellow, stroke: lightYellow};
    const redCircle = {outer: red, middle: pink, center: blue, stroke: lightYellow};
    const yellowCircle = {outer: yellow, middle: blue, center: lightTeal, stroke: lightYellow};
    const lightTealCircle = {outer: lightTeal, middle: teal, center: pink, stroke: lightYellow};

    //assigning the colored circles to the middle row keys
    const middleRowKeys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
    if (middleRowKeys.includes(key)) {
        const middleRowColors = [blueCircle, tealCircle, lightTealCircle];
        circleColors = random(middleRowColors);
    } 
    
    //assigning the colored circles to the top row keys
    const topRowKeys = ['w', 'e', 'r', 't', 'y', 'u', 'i', 'o'];
    if (topRowKeys.includes(key)) {
        const topRowColors = [pinkCircle, redCircle, yellowCircle];
        circleColors = random(topRowColors);
    }

    //pushing the selected circle to be drawn
    circleArray.push({
        x, 
        y, 
        outerRing: circleColors.outer,
        middleRing: circleColors.middle,
        centerRing: circleColors.center,
        stroke: circleColors.stroke,
        size: circleSize
    });
    keysPressed.delete(key);
});

function setup() {
    createCanvas(1000, 550); 
    background(0); //setting initial background to black

    //button to display artwork
    buttonDisplayArtwork = createButton('Display Artwork');
    buttonDisplayArtwork.mousePressed(() => {
        displayArtwork = true;
        background(lightYellow); //changing background to be light yellow after button is pressed

    });

    //button to reset artwork
    buttonEraseArtwork = createButton('Erase Artwork')
    buttonEraseArtwork.mousePressed(() => {
        eraseArtwork = true;
    })
}

function drawColoredCircles(x, y, outerRing, middleRing, centerRing, strokeColor, size) {
    stroke(strokeColor);
    fill(outerRing);
    ellipse(x, y, size * 0.9 , size * 0.9); //increase size of outer ring by 0.9 

    fill(middleRing);
    ellipse(x, y, size * 0.7, size * 0.7); //increase size of outer ring by 0.7

    fill(centerRing);
    ellipse(x, y, size * 0.4, size * 0.4); //increase size of outer ring by 0.4
}

function draw() {
    //erasing artwork when buttons are pressed 
    if (eraseArtwork) {
        background(0);
        circleArray.length = 0;
        displayArtwork = false;
        eraseArtwork = false;
    }
    
    //calling the circles to be drawn when a flat(a-l) and sharp(w-o) note are played together after the button is pressed
    if (displayArtwork) {
        for (let c of circleArray) {
            drawColoredCircles(c.x, c.y, c.outerRing, c.middleRing, c.centerRing, c.stroke, c.size)
        }
    }
}

