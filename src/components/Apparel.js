import React, {useState, useEffect} from 'react'
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
            <h2>Apparel</h2>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6i5VgW7zqU3dmLqaZk5GHlfeqbCybr9ms2A&usqp=CAU" alt="Apparel"/>

            <Route path="/storefront/apparel">
                <ApparelMerch apparelList={apparelList}/>
            </Route>
        </div>
  )
}

export default Apparel
