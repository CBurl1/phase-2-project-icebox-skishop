import React from 'react'
import SkiCard from './SkiCard'

function Ski({skisList}) {
    const skiComponents =
        skisList.map(ski => {

            return <SkiCard key={ski.id} {...ski}/>
        })

  return (
    <div>
      {skiComponents}
    </div>
  )
}

export default Ski
