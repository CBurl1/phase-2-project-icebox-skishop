import React from 'react'
import ApparelCard from "./ApparelCard"

function Apparel({apparelList}) {
    const apparelComponents = apparelList.map(apparel => (<ApparelCard key={apparel.id} {...apparel}/>))

  return (
    <div>
        {apparelComponents}
    </div>
  )
}

export default Apparel
