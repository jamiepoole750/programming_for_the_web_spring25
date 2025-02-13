//select empty div and assign to a variable 
const myEmptyDiv = document.querySelector("#myEmptyDiv");
//create headline element about llamas 
const heading = document.createElement('h1'); //create new element
heading.innerHTML = 'Llamas can shoot green spit up to 10 feet away!';
heading.style.cursor = 'pointer'; //indicates to user h1 is clickable 
//append healdline element to myEmptyDiv
myEmptyDiv.appendChild(heading);
//add event listener to headline to change color of whole window when headline is clicked
heading.addEventListener('click', handleHeadingClick);
function handleHeadingClick() {
    console.log('heading has been clicked');
    document.body.style.backgroundColor = "green";
};