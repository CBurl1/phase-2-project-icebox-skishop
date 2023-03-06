import React from 'react'
import SkiCard from './SkiCard'

function Ski({skisList, handleSkiClick}) {
    const skiComponents =
        skisList.map(ski => {

            return <SkiCard key={ski.id} {...ski}/>
        })

  return (
    <div onClick={handleSkiClick}className="skis">
      {skiComponents}
    </div>
  )
}

export default Ski
