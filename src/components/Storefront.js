import Snowboard from "./Snowboard"
import Ski from "./Ski"
import NavBar from "./NavBar"

import React, {Route, Switch, } from 'react'
 

function Storefront() {
  return (
    <div><NavBar />
        <Switch>
            <Route path="/snowboard">
                <Snowboard />
            </Route>
            <Route path="/ski">
                <Ski />
            </Route>
        </Switch>
    </div>
    
    )
  }
export default Storefront