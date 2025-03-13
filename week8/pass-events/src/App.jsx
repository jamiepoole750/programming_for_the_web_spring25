import { useState } from 'react'
import './App.css'
import AnimalComponent from './animalComponent';

function App() {
  const [headline, setHeadline] = useState("List of Animals"); //state variable
  const [animals, setAnimals] = useState([
    "Tiger",
    "Zebra",
    "Parrot",
    "Shark",
    "Whale",
    "Polar Bear",
    "Monkey",
    "Moose",
    "Snake",
    "Turtle",
    "Jellyfish",
    "Camel",
    "Dolphin",
    "Octopus",
    "Elephant",
    "Giraffe",
    "Narwhal",
    "Gorilla",
    "Otter",
    "Porcupine",
    "Seagull",
    "Humpback Whale",
    "Deer",
    "Rhino",
    "Ostrich"]); //list of animals
  
    function deleteAnimal(animalName) { //function to delete state
      const updatedArray = animals.filter((animals) => {
        return animals !== animalName;
      });
      setAnimals(updatedArray);
    }

    function focusAnimal(animalName) { //function to update headline 
      setHeadline(animalName)
    }


  return (
    <>
      <h1>{`${headline} = favorite animal`}</h1>
      <p>Click on the Focus button to display your favorite animal. Or click on the Delete button to delete animals you don't like.</p>
      {animals.map((loopAnimal) => { 
        return <AnimalComponent 
          key={loopAnimal}
          animalName={loopAnimal}
          deleteFn={deleteAnimal}
          focusFn={focusAnimal}/>
      })}
    </>
  )
}

export default App
