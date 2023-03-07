import React, {useState, useEffect} from 'react'
import ApparelCard from './ApparelCard'
import AddNewApparelForm from './AddNewApparelForm'

function ApparelMerch({apparelUrl}) {
  const [apparelList , setApparelList] = useState([])
  function addToState(apparelObj){
    setApparelList([apparelObj ,...apparelList])
  }
  useEffect(()=> {
    fetch(apparelUrl )
      .then(r=>r.json())
      .then((apparelData) => {

        setApparelList(apparelData)
      })
  },[])
    const apparelComponents = apparelList.map(apparel => (<ApparelCard key={apparel.id} {...apparel}/>))
  return (
    <div>
      <AddNewApparelForm addToState={addToState}/>
      {apparelComponents}
      </div>
  )
}

export default ApparelMerch