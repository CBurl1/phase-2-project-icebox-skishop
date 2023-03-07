import Snowboard from "./Snowboard"
import Ski from "./Ski"
import Apparel from "./Apparel"
import React from 'react'
import {Route, Switch} from "react-router-dom"
import SnowboardMerch from "./SnowboardMerch"

const url = "http://localhost:3000/"
const skisUrl = url + "skis/"
const snowboardUrl = url + "snowboards/"
const apparelUrl = url + "apparel/"


function Storefront() {

  return (
    <>
    
    <div>
      <Snowboard   />
      <Ski skisUrl={skisUrl} />
      <Apparel apparelUrl={apparelUrl}/>
    </div>
    <div>
        <Switch>
            <Route exact path="/storefront/snowboards" render={<SnowboardMerch snowboardUrl={snowboardUrl} />}/>
        </Switch>
    </div>
    </>

  )
}
export default Storefront