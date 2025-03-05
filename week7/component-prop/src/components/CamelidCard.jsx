import "./camelid.css"

function Camelids({name, funFact}) { //creating destructered object with name from app.jsx
    console.log(name, funFact)
    return(
        <div className="CamelidCard">
            <h1>{name}</h1>
            <p>{funFact}</p>
        </div>
    );
}

export default Camelids;