import React, {Component} from "react";
import "./HomeButton.css"

const HomeButton = ({path}) => {

    return (
        <div >
            <button 
            className="button-1"
            role="button"  
            onClick={ () => window.location.href=`${path}`}>Home</button>
        </div>
    )
}

export default HomeButton