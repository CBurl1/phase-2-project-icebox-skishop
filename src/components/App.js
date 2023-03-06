import logo from './logo.svg';
import './App.css';
import Storefront from './Storefront';
import React, {Switch, Route, useState, useEffect} from 'react';


function App() {
  return (
    <div className="App">
      <NavBar />
        <Switch>
            <Route exact path="/home">
                <Home />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/storefront">
                <Storefront/>
            </Route>
        </Switch>
        
    </div>
  )
}

export default App;
