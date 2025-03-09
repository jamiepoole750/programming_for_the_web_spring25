import "./App.css"
import { PennyRow } from "./PennyRow";

function App() {
  const pressedPenny = [
    {
      penny: "Explore Canada",
      location: "International Falls, Minneasota",
      year: "2010",
      favPenny: true,
      image: "./minn.png"
    },
    {
      penny: "Space Needle",
      location: "Seattle, Washington",
      year: "2012",
      favPenny: true,
      image: "./seattle.png"
    },
    {
      penny: "Smithsonian",
      location: "Washington, DC",
      year: "2015",
      favPenny: false,
      image: "./dc.png"
    },
    {
      penny: "College Football Hall of Fame",
      location: "Atlantic, Georgia",
      year: "2018",
      favPenny: false,
      image: "./atlanta.png"
    },
    {
      penny: "Kentucky Derby",
      location: "Louisville, Kentucky",
      year: "2018",
      favPenny: false,
      image: "./kentucky.png"
    },
    {
      penny: "Huntington Beach",
      location: "Huntington, California",
      year: "2019",
      favPenny: true,
      image: "./cali.png"
    },
    {
      penny: "M&Ms Time Square",
      location: "Manhattan, New York ",
      year: "2019",
      favPenny: false,
      image: "./newyork.png"
    },
    {
      penny: "Garden of the Gods",
      location: "Manhattan, New York ",
      year: "2023",
      favPenny: true,
      image: "./colorado.png"
    }
  ]
  return(
    <>
      <div className="heading">
      <h1>Penny Collection</h1>
      <p> Below is a list of 8 pressed pennies I have collected throughout the United States.</p>
      <p> To find out which pennies are my favorite, look for the penny names that are bold.</p>
      </div>
      <table className="penny-table">
          <thead> 
            <tr>
              <th>Penny Name</th>
              <th>Location</th>
              <th>Year Accuirred</th>
              <th>Favorite Penny</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
              {pressedPenny.map((penny, index) => { 
                return (
                <PennyRow 
                key={penny.image}
                odd={index % 2 === 0}
                penny={penny.penny} 
                location={penny.location}
                year={penny.year}
                favPenny={penny.favPenny}
                image={penny.image}
                />)
              })}
          </tbody>
      </table>
    </>
  )
}

export default App;
