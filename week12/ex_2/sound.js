let backgroundColor = 0;
let songs = [];

//function preload() {
    //soundOne = loadSound('sounds/bird.mp3');
    //console.log("sound loaded", soundOne.isLoaded());
//}

//Canvas setup 
function setup() {
    createCanvas(400, 400);
    background(backgroundColor);

    //creating button to play sound
    button = createButton ('Random Generator'); //button one
    centerButton(); //centering button on page
    button.mousePressed(randomColorAndSong);


    //styling button
    button.style('color', 'white');
    button.style('background-color', '#EF6461');
    button.style('padding', '10px');
    button.style('border', 'none');
    button.style('border-radius', '10px');
    
    //loading songs 
    songs.push(createAudio('sounds/boing.mp3')); //boing sound
    songs.push(createAudio('sounds/pop.mp3')); //pop sound
    songs.push(createAudio('sounds/ding.mp3')); //select sound
    songs.push(createAudio('sounds/whale.mp3')); //sweep sound
}

function draw() {
    background(backgroundColor);
}

//setting up the random colors and songs when button is pressed
function randomColorAndSong() {
    //randomly selecting the colors 
    //#8EA604=green, #F5BB00=bright yellow, #EC9F05=yellow, #D76A03=orange
    backgroundColor = random (['#8EA604', '#F5BB00', '#EC9F05', '#D76A03']);

    //picking a random song to play
    let randomSong = random(songs);
    randomSong.play();
}

function centerButton() {
    let x = (windowWidth - 150) / 2;
    let y = (windowHeight + height) / 2 - 20;
    button.position(x,y);
}

function windowResized() {
    centerButton();
}