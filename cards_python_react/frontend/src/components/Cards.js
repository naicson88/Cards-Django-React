import React from "react";
import "./../../static/css/Cards.css"
import { useHistory } from "react-router-dom";

const Cards = ({card}) => {
    const history = useHistory();

    const handleClick = () => {
        history.push(card.path)
    }

    return (
        
        <div className="single-card" onClick={handleClick}>
            <div className="card-img">
                <img src={card.img} ></img>
            </div>
            <div className="card-description">
                {card.description ? card.description : card.name}
            </div>
        </div>
    )
}

export default Cards