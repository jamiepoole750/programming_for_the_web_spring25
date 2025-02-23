const cardDown = 'down'; //defining cards to face down
const cardUp = 'up'; //defining cards to face up
let startingX =  120; //defining starting x for each loop
let startingY = 200; //defining starting y for each loop
let cards = []; //creating an array to put all the cards into 
const gameState = {
    totalPairs: 9, 
    flippedCards: [], //array to count the number of flipped cards
    numMatched: 0, 
    attempts: 0,
    waiting: false 
};
let cardfaceArray = [];// preloading cardface images into an array 
let cardback;
function preload() {
    backgroundImg = loadImage ('images/pattern.png') //background wavy pattern
    cardback = loadImage ('images/cardback_plants.png') //inserting images on cardback
    cardfaceArray = [ //loading 9 cardface images
        loadImage ('images/avocado.png'), 
        loadImage ('images/banana.png'),
        loadImage ('images/carrot.png'),
        loadImage ('images/cherry.png'),
        loadImage ('images/corn.png'),
        loadImage ('images/kiwi.png'),
        loadImage ('images/orange.png'),
        loadImage ('images/pomegrante.png'),
        loadImage ('images/strawberry.png')
    ]
}

function setup () {
    createCanvas(1100, 900); //defining height and width of canvas
    background('#DEF4F9'); //setting background to light blue
    image(backgroundImg, 0, 0);
    let selectedFaces = []; //creating a local array
    for (let z = 0; z < 9; z++) {
        const randomIdx = floor(random(cardfaceArray.length)); //using floor to round to a whole number and using random to return random number in cardface Array
        const face = cardfaceArray[randomIdx]; //choosing random face from cardface Array
        selectedFaces.push(face); //need to copies of each image in array 
        selectedFaces.push(face);
        //remove the used cardface so images don't get randomly selected again
        cardfaceArray.splice(randomIdx, 1);
    }

    selectedFaces = shuffleArray(selectedFaces);

    for (let j = 0; j < 3; j++) { //creating three new rows
        for (let i = 0; i < 6; i++) { //creating row
            const faceImage = selectedFaces.pop(); //removing last item in array and returns it
            cards.push(new Card(startingX, startingY, faceImage)); //using new Card to create a new instance 
            startingX += 150; //adding +150px pf space between each additional rect in row 
        }
        startingY += 200; //adding 200px of space between each addtional rect
        startingX = 120; //resetting the startingX value of each row back to 120
    }
}

function draw () {
    fill (0); //color of matching game title
    textSize(60); //size of fruit matching text
    fill('#0c204a'); //color of all text -- navy blue
    textFont("Mochiy Pop One"); //changed font 
    text('Fruit Matching', 120, 165) //title of game 

    if (gameState.numMatched === gameState.totalPairs) { //if all pairs are matched
        textSize(50); //size of you won text
        fill('#f6aa00'); //change color of you win -- golden yellow
        text('You Win!', 735, 100); //then text will display
        textSize(10);
        fill('#0c204a');
        text('Refresh the page to play again! ', 765, 120);
        noLoop();
    }
    for (let k = 0; k < cards.length; k++) {
        if(!cards[k].isMatch) { //if the card match is false write it back to card facedown
            cards[k].face = cardDown;
        } 
        cards[k].show();
    }
    noLoop();
    gameState.flippedCards.length = 0;
    gameState.waiting = false;
    stroke('#0c204a'); //stroke color -- navy bllue
    strokeWeight(3);
    fill(255); //color of rect
    rect(720, 130, 270, 40, 10); //rect around attempts and matches
    noStroke(); //no stroke for text
    textSize(15); //size of text - attempts and matches
    fill(0); //color of text
    text('Attempts | ' + gameState.attempts, 740, 155); 
    text('Matches | ' + gameState.numMatched, 870, 155);
}

function mousePressed() { //making the cards clickable  
    if (gameState.waiting) {
      return;//stopping the rest of function from
    }
    for (let k = 0; k < cards.length; k++) { //creating loop function for all the cards
        if(gameState.flippedCards.length < 2 && cards[k].didHit(mouseX, mouseY)) { //triggers the cards to be flipped if condition is true
            console.log('flipped', cards[k]); //checking to see if card was flipped
            gameState.flippedCards.push(cards[k]);
        }
    }
    if (gameState.flippedCards.length === 2) { //once two cards are flipped this is check to see if they are a match 
        gameState.attempts++
        if (gameState.flippedCards[0].cardFaceImg === gameState.flippedCards[1].cardFaceImg) {//checking if images match and end up matching 
            //marking cards that match so they don't flip back 
            gameState.flippedCards[0].isMatch = true;
            gameState.flippedCards[1].isMatch = true;
            gameState.flippedCards.length = 0; //empty array to move on to next set
            gameState.numMatched++; //increment the score
            loop();
        } else { //cards don't match
            gameState.waiting = true; //stop them from flipping over more cards
            const loopTimeOut = window.setTimeout(() => { //adding time before cards are flipped back over to the cardbacks
                loop();
                window.clearTimeout(loopTimeOut);
            }, 1000)
        }
    }
}

class Card { 
    constructor (x, y, cardFaceImg) { //adding x and y parameters to change their positions
        this.x = x; // defining the x property
        this.y = y; //defining the y property
        this.width = 120; //defining width of rect 
        this.height = 170; //defining height of rect
        this.face = cardDown //making the cards start face down 
        this.cardFaceImg = cardFaceImg; //making cardFaceImg a property
        this.isMatch = false; //used to know whether to show the card or not 
        this.show(); //using .show to display new Card
    }

    show() { //checking if card is faced up or already matched
        if (this.face === cardUp || this.isMatch) { //show cardface
            fill('#FFDAD9'); //front of card img - light green
            rect(this.x, this.y, this.width, this.height, 10) //creating front rectangle 
            image(this.cardFaceImg, this.x, this.y); //showing a cardface img
        } else { //back of card will be shown 
            fill('#FCF4C8'); //back of the card img - light pink
            rect(this.x, this.y, this.width, this.height, 10) //creating backside rectangle
            image(cardback, this.x, this.y);
        }
    } 

    didHit (mouseX, mouseY) { //defining didHit
        if (mouseX >= this.x && mouseX <= this.x + this.width && 
            mouseY >= this.y && mouseY <= this.y + this.height) {
                this.flip(); //adding the flip to trigger the flip of face up or face down
                return true; //making true statement in console if card is hit
            } else {
                return false; //making false statement in console if card is not hit
            }
    }

    flip () { //creating a method called flip to check to see what the card face direction is to call the card to show
        if (this.face === cardDown) { //if card is faced down then card will face up 
            this.face = cardUp;
        } else {
            this.face = cardDown; //if card is faced up than card will face down
        }
        this.show(); //card will be show whether it's faced up or faced down
    }
}

//making the cards shuffe 
function shuffleArray (array) {
    let counter = array.length; 
    while (counter > 0) { 
        //pick random item in the array
        const idx = Math.floor(Math.random() * counter); //
        //decrease counter by 1 (decrement)
        counter--;
        //swap the last element with it 
        const temp = array[counter]; 
        array [counter] = array[idx]; 
        array [idx] = temp;
    }
    return array;
}