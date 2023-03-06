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
     const search = skisList.filter((ski) =>
      ski.brand.toLowerCase().includes(query) ||
      ski.description.toLowerCase().includes(query) ||
      ski.category.toLowerCase().includes(query) ||
      ski.gender.toLowerCase().includes(query) ||
      ski.price.toString().includes(query) ||
      ski.year.toString().includes(query)
                                                )
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
