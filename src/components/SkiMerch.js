import React, {useState, useEffect} from 'react'
import AddNewSkiForm from './AddNewSkiForm'
import SkiCard from './SkiCard'
import SkiSearch from './SkiSearch'

function SkiMerch({skisUrl}) {
  const [skisList, setSkisList] = useState([])
  const [query, setQuery] = useState('')
  const [showForm, setShowForm] = useState(false);
  function countLikes (likedObj){
    const merchLiked = [...skisList].map(merchObj => {
      if(merchObj.id === likedObj.id){
        return likedObj
      }else{
        return merchObj
      }
    })
    setSkisList(merchLiked)
  }

  function removeSkis(doomedId) {
    const newList = skisList.filter(skiObj => {
      return skiObj.id !== doomedId
    })
    setSkisList(newList)
  }

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
     const skiComponents = search.map(ski => ( <SkiCard key={ski.id} {...ski} countLikes={countLikes}/>))
     const skiComponents = search.map(ski => ( <SkiCard key={ski.id} {...ski} removeSkis={removeSkis}/>))
     function handleClick() {
      setShowForm((showForm) => !showForm);
    }

  return (
    <div>
      {showForm ? <AddNewSkiForm addToState={addToState}/> : null}
      <div className="buttonContainer">
          <button onClick={handleClick}>{showForm ? "Hide Form" : "Add Some Skis"}</button>
      </div>
      <SkiSearch query={query} setQuery={setQuery}/>
      {skiComponents}
    </div>
  )
}

export default SkiMerch
