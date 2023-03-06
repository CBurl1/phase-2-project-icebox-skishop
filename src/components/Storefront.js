import Snowboard from "./Snowboard"
import Ski from "./Ski"
import React, {useState, useEffect} from 'react'


function Storefront() {
    const [skisList, setSkisList] = useState([])

    useEffect(()=> {
        fetch('')
    },[])
  return (
    <div>
      <Snowboard />
      <Ski skisList={skisList}/>
    </div>
    )
  }
export default Storefront