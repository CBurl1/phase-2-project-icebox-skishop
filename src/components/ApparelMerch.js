import React, {useState, useEffect} from 'react'
import ApparelCard from './ApparelCard'
import AddNewApparelForm from './AddNewApparelForm'
import ApparelSearch from './ApparelSearch'

function ApparelMerch({apparelUrl}) {
  const [apparelList , setApparelList] = useState([])
  const [query, setQuery] = useState('')
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
    const search = apparelList.filter(snowboard => snowboard.brand.toLowerCase().includes(query))

    const apparelComponents = search.map(apparel => (<ApparelCard key={apparel.id} {...apparel}/>))
  return (
    <div>
      <AddNewApparelForm addToState={addToState}/>
      <ApparelSearch query={query} setQuery={setQuery}/>
      {apparelComponents}
      </div>
  )
}

export default ApparelMerch