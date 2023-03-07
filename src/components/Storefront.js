import Snowboard from "./Snowboard"
import Ski from "./Ski"
import Apparel from "./Apparel"
import React, {useState, useEffect} from 'react'

const url = "http://localhost:3000/"
const skisUrl = url + "skis/"
const snowboardUrl = url + "snowboards/"
const apparelUrl = url + "apparel/"


function Storefront() {
    
  return (
    <div>
      <Snowboard  snowboardUrl={snowboardUrl} />
      <Ski skisUrl={skisUrl} />
      <Apparel apparelUrl={apparelUrl}/>
    </div>
  )
}
export default Storefront