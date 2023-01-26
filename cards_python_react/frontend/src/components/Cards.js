import React from "react";
import "./../../static/css/Cards.css"
import { useHistory } from "react-router-dom";

const Cards = () => {
    const history = useHistory();

    const handleClick = () => {
     
        history.push('/excel-deck')
    }
    return (
        <div className="single-card" onClick={handleClick}>
            <div className="card-img">
                <img src="./../../static/images/icons/excel.png" ></img>
            </div>
            <div className="card-description">
                DECK FROM EXCEL FILE
            </div>
        </div>
    )
}

export default Cards