import React from 'react'
import {Switch, Route} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Storefront from "./Storefront"
import NavBar from "./NavBar"
import SnowboardMerch from './SnowboardMerch'
import SkiMerch from './SkiMerch'
import ApparelMerch from './ApparelMerch'
import Cart from './Cart'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
const url = "http://localhost:3000/"
const skisUrl = url + "skis"
const snowboardUrl = url + "snowboards"
const apparelUrl = url + "apparel"
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
            <Route exact path="/storefront/snowboards">
                <SnowboardMerch snowboardUrl={snowboardUrl} />
            </Route>
            <Route exact path="/storefront/skis">
                <SkiMerch skisUrl={skisUrl} />
            </Route>
            <Route exact path="/storefront/apparel">
                <ApparelMerch apparelUrl={apparelUrl} />
            </Route>
            <Route exact path="/cart">
                <Cart />
            </Route>
            <Route exact path="*">
                <Home />
            </Route>
        </Switch>
      </div>

  )
}

export default App;
