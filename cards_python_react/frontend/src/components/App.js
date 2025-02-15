import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
import ExcelDeckForm from "./ExcelDeckForm"
import PkmHomePage  from "./PkmHomePage"
import PkmDetails  from "./PkmDetails"
import PkmCardDetails  from "./PkmCardDetails"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
  } from "react-router-dom";

export default class App extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <Router>
                <div className="container">
                    <Switch>
                        <Route exact path="/"> <HomePage />  </Route>
                        <Route path={"/:excel-deck"} exact component={ExcelDeckForm} />
                        <Route path={"/:pkm-home"} exact component={PkmHomePage} />
                        <Route path={"/:pkm-details"} exact component={PkmDetails} />
                        <Route path={"/:pkm-card"} exact component={PkmCardDetails} />
                        
                    </Switch>
                </div>       
            </Router>
        )
    }
}


const appDiv = document.getElementById("app")
render(<App/>, appDiv)