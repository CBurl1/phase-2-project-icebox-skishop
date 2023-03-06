import React from 'react'
import SnowboardCard from './SnowboardCard'

function Snowboard({snowboardsList, handleSnowboardClick}) {

    const snowboardComponents = snowboardsList.map(snowboard => {
        return <SnowboardCard key={snowboard.id} {...snowboard}/>
    })
    return (
        <div onMouseEnter={handleSnowboardClick}className="snowboards">
            {snowboardComponents}
        </div>
    )
}

export default Snowboard
