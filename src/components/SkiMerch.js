import React, {useState, useEffect} from 'react'
import AddNewSkiForm from './AddNewSkiForm'
import SkiCard from './SkiCard'
import SkiSearch from './SkiSearch'

function SkiMerch({skisUrl}) {
  const [skisList, setSkisList] = useState([])
  const [query, setQuery] = useState('')
  function addToState (skiObj){
    setSkisList([skiObj ,...skisList])
}
  useEffect(()=> {
      fetch(skisUrl)
        .then(r=>r.json())
        .then((skisData) => {

          setSkisList(skisData)
        })
  },[])
     const search = skisList.filter(snowboard => snowboard.brand.toLowerCase().includes(query))
     const skiComponents = search.map(ski => ( <SkiCard key={ski.id} {...ski}/>))
  return (
    <div>
      <AddNewSkiForm addToState={addToState}/>
      <SkiSearch query={query} setQuery={setQuery}/>
      {skiComponents}
    </div>
  )
}

export default SkiMerch
