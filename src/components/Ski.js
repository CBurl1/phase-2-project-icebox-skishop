import React, {useState, useEffect} from 'react'
import {Route} from "react-router-dom"
import SkiMerch from './SkiMerch'

function Ski({skisUrl}) {
    const [skisList, setSkisList] = useState([])
    useEffect(()=> {
        fetch(skisUrl)
          .then(r=>r.json())
          .then((skisData) => {

            setSkisList(skisData)
          })
    },[])


  return (
    <div>
            <h2>Skis</h2>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdK4MjzhgO-fa-EbdEHODQeiFcn59xYH33eg&usqp=CAU" alt="Skis"/>
            <Route path="/storefront/skis">
                <SkiMerch skisList={skisList}/>
            </Route>
        </div>
  )
}

export default Ski
