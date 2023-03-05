import Snowboard from "./Snowboard"
import Ski from "./Ski"
import Apparel from "./Apparel"
import React, {useState, useEffect} from 'react'

const url = "http://localhost:3000/"
const skisUrl = url + "skis/"
const snowboardUrl = url + "snowboards/"
const apparelUrl = url + "apparel/"


function Storefront() {
    const [skisList, setSkisList] = useState([])
    const [snowboardsList, setSnowboardsList] = useState([])
    const [apparelList, setApparelList] = useState([])

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
    useEffect(()=> {
      fetch(apparelUrl )
        .then(r=>r.json())
        .then((data) => {

          setApparelList(data)
        })
    },[])


  return (
    <div>
      <Snowboard  snowboardsList={snowboardsList} />
      <Ski skisList={skisList} />
      <Apparel apparelList={apparelList}/>
    </div>
  )
}
export default Storefront