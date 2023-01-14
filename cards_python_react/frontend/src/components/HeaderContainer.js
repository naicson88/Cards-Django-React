import React, { Component } from "react";
import "./../../static/css/HeaderContainer.css"

const HeaderContainer = ({text}) =>  {
        return (
            <div className="header-container">
                <h1>{text}</h1>
            </div>
        )
}

export default HeaderContainer