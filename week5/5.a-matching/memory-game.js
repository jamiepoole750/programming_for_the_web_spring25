const cardDown = 'down'; //defining cards to face down
const cardUp = 'up'; //defining cards to face up
let startingX =  120; //defining starting x for each loop
let startingY = 200; //defining starting y for each loop
let cards = []; //creating an array to put all the cards into 
const gameState = {

};
let cardback;
function preload() {
    cardback = loadImage ('images/cardback_plants.png')
}

function setup () {
    createCanvas(1100, 900); //defining height and width of canvas
    background('#DEF4F9'); //setting background to navy blue
    for (let j = 0; j < 3; j++) { //creating three new rows
        for (let i = 0; i < 6; i++) { //creating row
            cards.push(new Card(startingX, startingY)); //using new Card to create a new instance 
            startingX += 150; //adding +150px pf space between each additional rect in row 
        }
        startingY += 200; //adding 200px of space between each addtional rect
        startingX = 120; //resetting the startingX value of each row back to 120
    }
}

function mousePressed() { //making the cards clickable  
    for (let k = 0; k < cards.length; k++) { //creating loop function for all the cards
        if(cards[k].didHit(mouseX, mouseY)) { //calling mouseX and mouseY to flip all the cards 
            console.log('flipped'); //checking to see if card was flipped
        }
    }
}

class Card { 
    constructor (x, y) { //adding x and y parameters to change their positions
        this.x = x; // defining the x property
        this.y = y; //defining the y property
        this.width = 120; //defining width of rect 
        this.height = 170; //defining height of rect
        this.face = cardDown //making the cards start face down 
        this.show(); //using .show to display new Card
    }

    show() { 
        if (this.face === cardDown) { //back of card will be shown
            fill('#FCF4C8'); //back of the card img
            rect(this.x, this.y, this.width, this.height, 10) //creating backside rectangle
            image(cardback, this.x, this.y);
        } else { //front of card will be shown 
            fill('#FFDAD9'); //front of card img
            rect(this.x, this.y, this.width, this.height, 10) //creating front rectangle 
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

