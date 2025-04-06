//using hook paramas to get id number
import { useParams, Link } from "react-router-dom";
import PropTypes from "prop-types"; //verify we are getting expected propos
import "./PennyDetail.css"

export function PennyDetail({data}) {
    const {id} = useParams();
    console.log("params", id);
    //loop through array to check if any ids match the id from useParams
    const selectedPenny = data.find((penny) => penny.id === id);
    console.log("penny", selectedPenny);
    return (
        <div className="pennyDetail">
            <Link to="/">Return to Penny Collection</Link>
            <h1>{selectedPenny.penny}</h1>
            <div className="pennyContainer">
                <div className="pennyImg">
                    <img src={selectedPenny.image} alt={selectedPenny.image}/>
                </div>
                <p><strong>Location:</strong> {selectedPenny.location}</p>
                <p><strong>Year Acquired:</strong> {selectedPenny.year}</p>
                {selectedPenny.favPenny && (<p>This penny is a favorite in the collection.</p>)}
            </div>
        </div>
        
    )
}

PennyDetail.PropTypes = {
    data: PropTypes.array
};