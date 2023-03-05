import React, {useState, useEffect} from 'react'
import {Route} from "react-router-dom"
import SnowboardMerch from './SnowboardMerch'

function Snowboard({snowboardUrl}) {
    const [snowboardsList, setSnowboardsList] = useState([])
    useEffect(()=> {
        fetch(snowboardUrl )
          .then(r=>r.json())
          .then((boardsData) => {

            setSnowboardsList(boardsData)
          })
      },[])



    return (
        <div>
            <h2>Snowboards</h2>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqVN7p_r82_SxOYgPx8B7bLmUUTiaPvq_qj15udmwYv5ZccO5EgcO2ebYrDoazbRyTfkw&usqp=CAU" alt="Snowboards"/>
            <Route path="/storefront/snowboards">
                <SnowboardMerch snowboardsList={snowboardsList}/>
            </Route>
        </div>
    )
}

export default Snowboard
