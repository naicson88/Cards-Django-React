import React, {Component} from "react";
import "./HomeButton.css"

const HomeButton = (props) => {

    return (
        <div >
            <button 
            className="button-1"
            role="button"  
            onClick={ () => window.location.href=`${props.path}`}>{props.text}</button>
        </div>
    )
}

export default HomeButton