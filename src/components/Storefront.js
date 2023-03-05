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

  function handleSkiHover () {
    setSeeSkis(!seeSkis)
  }
  function handleSnowboardHover () {
    setSeeSnowboards(!seeSnowboards)
  }

  return (
    <div>
      <SubNavBar />
          <Snowboard
          snowboardsList={snowboardsList}
          handleSkiHover={handleSkiHover}
          seeSkis={seeSkis}
          />
          <Ski
          skisList={skisList}
          handleSnowboardHover={handleSnowboardHover}
          seeSnowboards={seeSnowboards}
          />
    </div>
  )
}
export default Storefront