// Top 5 favorite movies
const myArr = ['10 Things I Hate About You', 'Anastasia', 'Narnia', 'About Time', 'We Live in Time'];
console.log(myArr);

//Prompt to enter movie
const name = window.prompt("What is your favorite movie?");

//Adding movie to the array using push 
myArr.push(name);
console.log("My Favorite Movies", myArr);

//display movie list with toString
console.log(myArr.toString());
 