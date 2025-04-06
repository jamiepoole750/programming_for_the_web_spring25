import { useState } from "react";
import { nanoid } from "nanoid";
import ItemCard from "../ItemCard/ItemCard";
import Masthead from "../Masthead/Masthead";
import pennyData from "../assets/penny-data.json";


export function Home() {
    //state variable = pennies
  //function allowing us to change variable = setPennies
  const [pennies, setPennies] = useState(pennyData); //updating useState to include information from penny-data.json

  //using console to copy area to create json file
  console.log(pennies);

//taking existing commandar decks and using the spread operator (...) to create a new deck
function addPressedPenny(data) {
  console.log("data", data); //wil show the submitted data
  const newiId = nanoid(6); //creates new string
  const newPenny = {...data, id:newiId}; //adds data to new deck of pennies
  console.log(newPenny);
  setPennies([...pennies, newPenny]) //
}

function deleteCard(id) {
  console.log("delete me", id);
  const updatedArray = pennies.filter((pressedPenny) => {
    return pressedPenny.id !== id; //skips items with matching ids
  });
  setPennies(updatedArray);
}

function duplicateCard(id) {
  console.log("duplicate me", id);
  const matchingPenny = pennies.find((pressedPenny) => {
    return pressedPenny.id === id //look through array to find matching id
  });
  const updatedPenny = {...matchingPenny, id:nanoid()} //creating new ids
  setPennies([...pennies, updatedPenny]);
}

return(
    <div className="page">
    <Masthead/>
    <div className="collection">
      {pennies.map((pressedPenny) => {
        return (
          <ItemCard 
          key={pressedPenny.id} 
          deleteFn={deleteCard}
          duplicateFn={duplicateCard}
          {...pressedPenny}/>
        )
      })}
    </div>
  </div>
);
}