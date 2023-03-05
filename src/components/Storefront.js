import Snowboard from "./Snowboard"
import Ski from "./Ski"
import Apparel from "./Apparel"
import React from 'react'
import AddNewForm from './AddNewForm'
const url = "http://localhost:3000/"
const skisUrl = url + "skis/"
const snowboardUrl = url + "snowboards/"
const apparelUrl = url + "apparel/"


function Storefront() {

  return (
    <>
    <div><AddNewForm /></div>
    <div>
      <Snowboard  snowboardUrl={snowboardUrl} />
      <Ski skisUrl={skisUrl} />
      <Apparel apparelUrl={apparelUrl}/>
    </div>
    </>

  )
}
export default Storefront