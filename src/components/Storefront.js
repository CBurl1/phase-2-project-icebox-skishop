import Snowboard from "./Snowboard"
import Ski from "./Ski"
import StoreNavBar from "./StoreNavBar"
import React, {Route, Switch, } from 'react'
function Storefront() {
  return (
    <div><StoreNavBar />
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