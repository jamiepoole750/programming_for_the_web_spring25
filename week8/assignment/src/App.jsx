import { useState } from 'react'
import './App.css'
import Masthead from './Masthead/Masthead';
import ItemCard from './ItemCard/ItemCard';
import {nanoid} from "nanoid";

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
      location: "Manhattan, New York ",
      year: "2023",
      favPenny: true,
      image: "./colorado.png", 
      id: "8" 
    }
  ]);

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
    </div>
  )
}

export default App
