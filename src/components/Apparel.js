import React, {useState, useEffect} from 'react'
import ApparelCard from "./ApparelCard"
import {Route }from "react-router-dom"
import ApparelMerch from './ApparelMerch'

function Apparel({apparelUrl}) {
  const [apparelList , setApparelList] = useState([])
  useEffect(()=> {
    fetch(apparelUrl )
      .then(r=>r.json())
      .then((apparelData) => {

        setApparelList(apparelData)
      })
  },[])

    

  return (
    <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6i5VgW7zqU3dmLqaZk5GHlfeqbCybr9ms2A&usqp=CAU"/>
            <Route path="/storefront/apparel">
                <ApparelMerch/>
            </Route>
        </div>
  )
}

export default Apparel
