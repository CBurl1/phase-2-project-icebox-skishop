import React from 'react'
import {Switch, Route} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Storefront from "./Storefront"
import NavBar from "./NavBar"


function App() {
  return (
    <div>
      <NavBar />
      <Switch>
          <Route exact path="/about">
              <About />
          </Route>
          <Route exact path="/storefront">
              <Storefront/>
          </Route>
          <Route exact path="/">
              <Home />
          </Route>
      </Switch>

    </div>
  )
}

export default App;
