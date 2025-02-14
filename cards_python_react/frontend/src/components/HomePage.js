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
     const  cards = [
                {               
                    "img": "./../../static/images/icons/excel.png",
                    "description":"DECK FROM EXCEL FILE",
                    "path": "excel-deck"
                },
                {               
                    "img": "./../../static/images/icons/names.png",
                    "description":"DECK FROM EXCEL NAMES",
                    "path": "excel-deck"
                },
                {               
                    "img": "./../../static/images/icons/pokeball.png",
                    "description":"POKEMON CARDS",
                    "path": "/pkm-home"
                }
            ]
            return (
              
                <div className="main-container">
                    <HeaderContainer text={'Cards Python Management'} />    

                    <div className="container-cards">
                     {  cards.map((card, index) =>  <Cards key={index} card={card}/> ) }              
                    </div>                                            
                </div>       
              
            )
        
  }

  export default HomePage