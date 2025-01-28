//Array with 3 of my favorite games
const favGames = ["Rummy Royal", "Careers", "Speed Scrabble"];
console.log(favGames);

//Objects and properties 
const games = [
    { title: ' Rummy Royal ', numberOfPlayers: '2-8 players,', rating: '4/5 stars, ', shortDesciption: ' a deck of cards is split amongst players and players must get rid of their cards to have a chance at collecting chips.' },
    { title: ' Careers ', numberOfPlayers: '2-6 players,', rating: '5/5 stars, ', shortDesciption: ' you travel around the board and enter different occupations to gain fame, happiness, and fortune.' },
    { title: ' Speed Scrabble ', numberOfPlayers: '4-6 players,', rating: '4/5 stars, ', shortDesciption: ' tiles are placed face down on table and players grab the tiles to build their own scrabble grid.'},
];

//user prompt
const promptResponse = window.prompt("I have 3 games in my collection. Pick a number between 1 and 3 and I'll tell you about that game.");

//result of prompt
console.log ("You selected" + games[ promptResponse -1 ].title + "which is played with " + games[ promptResponse -1 ].numberOfPlayers + " rated " + games[ promptResponse -1].rating + "where" + games[ promptResponse -1].shortDesciption);

