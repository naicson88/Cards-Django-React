import React, {Component} from "react";
import "./../../static/css/HomePage.css"
import HeaderContainer from "./HeaderContainer"
import Cards from "./Cards"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
  } from "react-router-dom";

 const HomePage = () => { 
            return (
              
            <div className="container">
                <HeaderContainer text={'Cards Python Management'} />    

                <div className="container-cards">
                    <Cards />
                </div>                                            
            </div>       
              
        )
        
  }

  export default HomePage