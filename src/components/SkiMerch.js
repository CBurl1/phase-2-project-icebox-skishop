import React, {useState, useEffect} from 'react'
import AddNewSkiForm from './AddNewSkiForm'
import SkiCard from './SkiCard'

function SkiMerch({skisUrl}) {
  const [skisList, setSkisList] = useState([])
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
     const skiComponents =
        skisList.map(ski => ( <SkiCard key={ski.id} {...ski}/>))
  return (
    <div>
      <AddNewSkiForm addToState={addToState}/>
      {skiComponents}
    </div>
  )
}

export default SkiMerch
