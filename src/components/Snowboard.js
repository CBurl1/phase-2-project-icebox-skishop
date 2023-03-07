import React, {useState, useEffect} from 'react'
import {Route, Switch, useHistory, Link} from "react-router-dom"
import SnowboardMerch from './SnowboardMerch'




function Snowboard() {
    const history = useHistory()
    function handleDivClick (){
        history.push("/storefront/snowboards")
    }
    



    return (
        <Link to="/storefront/snowboards">
            <h2>Snowboards</h2>
            <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqVN7p_r82_SxOYgPx8B7bLmUUTiaPvq_qj15udmwYv5ZccO5EgcO2ebYrDoazbRyTfkw&usqp=CAU" alt="Snowboards"/>
        </Link>
    )
}

export default Snowboard
