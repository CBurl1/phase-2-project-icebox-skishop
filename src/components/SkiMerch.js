import React from 'react'
import SkiCard from './SkiCard'

function SkiMerch({skisList}) {
     const skiComponents =
        skisList.map(ski => {

            return <SkiCard key={ski.id} {...ski}/>
        })
  return (
    <div>SkiMerch</div>
  )
}

export default SkiMerch
