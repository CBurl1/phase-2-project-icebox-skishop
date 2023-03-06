import Snowboard from "./Snowboard"
import Ski from "./Ski"
import React, {useState, useEffect} from 'react'

import SubNavBar from "../SubNavBar"


const url = "http://localhost:3000/"
const skisUrl = url + "skis/"
const snowboardUrl = url + "snowboards/"
function Storefront() {
    const [skisList, setSkisList] = useState([])
    const [snowboardsList, setSnowboardsList] = useState([])
    const [seeSkis, setSeeSkis] = useState(false)
    const [seeSnowboards, setSeeSnowboards] = useState(false)

    useEffect(()=> {
        fetch(skisUrl)
          .then(r=>r.json())
          .then((data) => {

            setSkisList(data)
          })
    },[])
    useEffect(()=> {
      fetch(snowboardUrl )
        .then(r=>r.json())
        .then((data) => {

          setSnowboardsList(data)
        })
  },[])

  function handleSkiClick () {
    setSeeSkis(!seeSkis)
  }
  function handleSnowboardClick () {
    setSeeSnowboards(!seeSnowboards)
  }

  return (
    <div>
      <SubNavBar />
          <Snowboard
          snowboardsList={snowboardsList}
          handleSkiClick={handleSkiClick}
          
          />
          <Ski
          skisList={skisList}
          handleSnowboardClick={handleSnowboardClick}
          seeSnowboards={seeSnowboards}
          />
    </div>
  )
}
export default Storefront