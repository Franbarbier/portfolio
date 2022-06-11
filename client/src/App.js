import './App.css';
import './global.css';
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Services from './views/Services/Services.js';
import Home from './views/home/Home.js';


const App = () => {


    useEffect(() => {
        document.title = "Francisco Barbier"
        document.favIcon = "/assets/contact-foto1.png"
     }, []);
  // const dispatch = useDispatch()

  
useEffect(()=>{
    let href = window.location.href; // get the url
    let id = href.split("#")[1];
    let element = document.getElementById(id);

    console.log(id, element)
    setTimeout(() => {
        if (id == null) {
            window.scrollTo({ top: 0});
        }
    }, 500);
},[])

  function render(){

      return <Router>

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/expertise">
                        <Services />
                    </Route>
                   
                </Switch>
            </Router>

  }

  return ( render() )
}   

export default App;
