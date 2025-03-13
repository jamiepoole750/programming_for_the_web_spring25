import './App.css'
import {useState} from "react";


function App() {
  const [camelidImg, setCamelidImg] = useState(); //creating state variable, camelidImg, and update state variable, setCamelidImg

  return (
    <>
      <h1>Camelids Image Swap </h1>
      <h2>Press the buttons to see a picture of a llama or alpaca!</h2>
      <div>
          <button onClick={() => setCamelidImg("./llama.jpg")}> Llama </button>  <button onClick={() => setCamelidImg("./alpaca.jpg")}> Alpaca</button>
      </div>
      <div>
          {camelidImg && <img src={camelidImg} alt="Camelid" />}
        </div>
    </>
  )
}

export default App
