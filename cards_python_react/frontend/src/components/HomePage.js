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
                <Router>
                     <div className="container">
                        <Switch>
                            <Route exact path="/">
                                <HeaderContainer text={'Cards Python Management'} />    

                                <div className="container-cards">
                                   <Cards />
                                </div>           
                            </Route>
                        </Switch>
                    </div>       
                </Router>
            )
        
  }

  export default HomePage