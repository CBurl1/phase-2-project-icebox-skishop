import React from 'react'
import SkiCard from './SkiCard'

function SkiMerch({skisList}) {
     const skiComponents =
        skisList.map(ski => ( <SkiCard key={ski.id} {...ski}/>))
  return (
    <div>{skiComponents}</div>
  )
}

export default SkiMerch
