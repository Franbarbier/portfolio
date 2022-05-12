import './App.css';
import './global.css';
import React, { useState, useEffect } from 'react'
import Home from './views/home/home.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const App = () => {


    useEffect(() => {
        document.title = "Francisco Barbier"
        document.favIcon = "/assets/contact-foto1.png"
     }, []);
  // const dispatch = useDispatch()

  function render(){

      return <Router>

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                   
                </Switch>
            </Router>

  }

  return ( render() )
}   

export default App;
