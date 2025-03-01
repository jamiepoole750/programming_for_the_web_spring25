//creating ternary
let relatives = true; //defining relatives variable
//creating condition and true/false expression 
let res = relatives ? "Llamas relatives are camels and alpacas." : "Llamas relatives aren't sheeps or goats."; 

function App() {
  const llamaFacts = [ //creating list of llama facts 
    "The undercoat of llama fur is used for fleece in clothing. ",
    "Llamas can live up to 20 years. ",
    "Llamas hum as a way to communicate. ",
    "Llamas are relatives of camels and alpacas. ",
    "Llamas can shoot their spit up to 10 feet away. "
  ];

  return ( //displaying llamas facts on webpage
    <>
      <div> 
       <h1>5 Fun Llama Facts</h1>
       <h2>{llamaFacts}</h2>
       <p>These fun llama facts are from Discovery.com and were written by Tatum Lenberg.</p>
      </div>
    </>
  )
}
 //displaying ternary output using console.log
 console.log(res);

export default App
