import React from 'react'
import SnowboardCard from './SnowboardCard'

function Snowboard({snowboardsList}) {

    const snowboardComponents = snowboardsList.map(snowboard => {
        return <SnowboardCard key={snowboard.id} {...snowboard}/>
    })
    return (
        <div className="snowboards">
            {snowboardComponents}
        </div>
    )
}

export default Snowboard
