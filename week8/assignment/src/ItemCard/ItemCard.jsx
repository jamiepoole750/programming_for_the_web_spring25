import PropTypes from "prop-types"; //verify we are getting expected propos
import "./ItemCard.css";
import star from "../assets/icons/star_icon.svg";
import trash from "../assets/icons/trash_can_icon.svg";
import copy from "../assets/icons/copy_icon.svg";

export default function ItemCard({
    penny,
    location,
    year,
    favPenny,
    image,
    id, 
    deleteFn, 
    duplicateFn
}) {
    return (
        <div className="pennyCard">
            {favPenny && <div className="favPenny"><img src={star} title="Favorite Penny"/> </div>}
            <div className="cardImg">
                <img src={image} alt="pennies" />
            </div>
            <div className="cardTitle">{penny}</div>
            <div className="action">
                <a href="#" onClick={(evt) => { 
                    evt.preventDefault(); //disabling page reload after event
                    deleteFn(id)
                }}><img src={trash}/></a>
                <a href="#" onClick={(evt) => {
                    evt.preventDefault(); //disabling page reload after event
                    duplicateFn(id)
                 }}><img src={copy}/></a>
            </div>
            <div className="cardYear">{year}</div>
            <div className="cardLocation">{location}</div>
        </div>
    )
}
ItemCard.propTypes = {
    penny: PropTypes.string,
    location: PropTypes.string,
    year: PropTypes.string,
    favPenny: PropTypes.bool,
    image: PropTypes.string,
    id: PropTypes.string, 
    duplicateFn: PropTypes.func,
    deleteFn: PropTypes.func
}