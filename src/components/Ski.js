import React from 'react'
import Skicard from './Skicard'

function Ski({skisList}) {
    const skiComponents = 
        skisList.map(ski => {
            return <Skicard key={ski.id} {...ski}/>
        })

  return (
    <div>
      {skiComponents}
    </div>
  )
}

export default Ski
