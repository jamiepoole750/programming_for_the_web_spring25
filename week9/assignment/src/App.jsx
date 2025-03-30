import { useState } from 'react'
import { useForm } from "react-hook-form";
import './App.css'
import Masthead from './Masthead/Masthead';
import ItemCard from './ItemCard/ItemCard';
import {nanoid} from "nanoid";
import { NewPennyForm } from './NewPennyForm/NewPennyForm';

function App() {
  //state variable = pennies
  //function allowing us to change variable = setPennies
  const [pennies, setPennies] = useState([
    {
      penny: "Explore Canada",
      location: "International Falls, Minneasota",
      year: "2010",
      favPenny: true,
      image: "./minn.png",
      id: "1"
    },
    {
      penny: "Space Needle",
      location: "Seattle, Washington",
      year: "2012",
      favPenny: true,
      image: "./seattle.png",
      id: "2"
    },
    {
      penny: "Smithsonian",
      location: "Washington, DC",
      year: "2015",
      favPenny: false,
      image: "./dc.png",
      id: "3"
    },
    {
      penny: "Football Hall of Fame",
      location: "Atlantic, Georgia",
      year: "2018",
      favPenny: false,
      image: "./atlanta.png",
      id: "4"
    },
    {
      penny: "Kentucky Derby",
      location: "Louisville, Kentucky",
      year: "2018",
      favPenny: false,
      image: "./kentucky.png", 
      id: "5"
    },
    {
      penny: "Huntington Beach",
      location: "Huntington, California",
      year: "2019",
      favPenny: true,
      image: "./cali.png",
      id: "6"
    },
    {
      penny: "M&Ms Time Square",
      location: "Manhattan, New York ",
      year: "2019",
      favPenny: false,
      image: "./newyork.png", 
      id: "7"
    },
    {
      penny: "Garden of the Gods",
      location: "Colorado Springs, Colorado ",
      year: "2023",
      favPenny: true,
      image: "./colorado.png", 
      id: "8" 
    }
  ]);

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

  return (
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
      <NewPennyForm addPennyFn={addPressedPenny} />
    </div>
  )
}

export default App
