import React from 'react'
import SkiCard from './SkiCard'

function Ski({skisList,seeSkis,handleSkiHover}) {

    console.log(seeSkis)
    const skiComponents =
        skisList.map(ski => {

            return <SkiCard key={ski.id} {...ski}/>
        })

  return (
    <div className="skis">
      {skiComponents}
    </div>
  )
}

export default Ski
