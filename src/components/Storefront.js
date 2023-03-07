import Snowboard from "./Snowboard"
import Ski from "./Ski"
import Apparel from "./Apparel"
import React from 'react'
import {Route, Switch} from "react-router-dom"
import SnowboardMerch from "./SnowboardMerch"




function Storefront() {

  return (
    
    
    <div>
      <Snowboard   />
      <Ski  />
      <Apparel />
    </div>
    

  )
}
export default Storefront