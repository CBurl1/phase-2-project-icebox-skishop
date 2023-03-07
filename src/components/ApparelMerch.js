import React from 'react'
import ApparelCard from './ApparelCard'

function ApparelMerch({apparelList}) {
    const apparelComponents = apparelList.map(apparel => (<ApparelCard key={apparel.id} {...apparel}/>))
  return (
    <div>ApparelMerch</div>
  )
}

export default ApparelMerch