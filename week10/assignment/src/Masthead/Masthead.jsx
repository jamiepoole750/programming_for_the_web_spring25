import mastheadImg from "../assets/penny_masthead.png"
import "./Masthead.css";
import star from "../assets/icons/star_icon.svg";
import trash from "../assets/icons/trash_can_icon.svg";
import copy from "../assets/icons/copy_icon.svg";

export default function Masthead() {
    return (
        <div className="masthead">
            <img src= {mastheadImg} alt="Pressed Penny Collection"/>
            <h1>Pressed Penny Collection</h1>
            <h3>Below is a list of 8 pressed pennies I have collected throughout the United States. 
                Make your own list of pennies by deleting ones you don't like or duplicating the ones you do like.</h3>
            <div className="iconIndex">
                <div className="icon">
                    <img src={star}/> <p>Favorite Pennies</p>
                </div>
                <div className="icon">
                    <img src={trash}/> <p>Delete Penny</p>
                </div>
                <div className="icon">
                    <img src={copy}/> <p>Duplicate Penny</p>
                </div>
                
            </div>
            
        </div>
    )
}