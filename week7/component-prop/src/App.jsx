import Camelids from "./components/CamelidCard";
import "./index.css";


function App () {
  const camelidData = [
    //creating llama object
    {name: "Llamas", 
    funFact: "Fun Fact: Llamas are about 5.6 to 5.9 ft tall"
    },
    //creating alpaca object 
    {name: "Alpacas", 
    funFact: "Fun Fact: Alpacas are about 2.7 to 3.2 ft tall"}
  ]

  return(
    <div className="camelid-card">
      <h2>Camelids</h2>
      <Camelids name={camelidData[0].name}
      funFact={camelidData[0].funFact}/>
      <img src="./llama.jpg" alt="Llama"></img>
      <Camelids name={camelidData[1].name}
      funFact={camelidData[1].funFact}/>
      <img src="./alpaca.jpg" alt="Alpaca"></img>
    </div>
  )
}

export default App
