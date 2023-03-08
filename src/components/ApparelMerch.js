import React, {useState, useEffect} from 'react'
import ApparelCard from './ApparelCard'
import AddNewApparelForm from './AddNewApparelForm'
import ApparelSearch from './ApparelSearch'

function ApparelMerch({apparelUrl}) {
  
  const [apparelList , setApparelList] = useState([])
  const [query, setQuery] = useState('')

  function removeApparel(doomedId) {
    console.log(doomedId)
  }
  function countLikes (likedObj){
    const merchLiked = [...apparelList].map(merchObj => {
      if(merchObj.id === likedObj.id){
        return likedObj
      }else{
        return merchObj
      }
    })
    setApparelList(merchLiked)
  }
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
    const search = apparelList.filter((app) =>  app.brand.toLowerCase().includes(query) ||
                                                app.description.toLowerCase().includes(query) ||
                                                app.category.toLowerCase().includes(query) ||
                                                app.gender.toLowerCase().includes(query) ||
                                                app.price.toString().includes(query) ||
                                                app.year.toString().includes(query)
    )

    const apparelComponents = search.map(apparel => (<ApparelCard key={apparel.id} {...apparel} countLikes={countLikes} removeApparel={removeApparel}/>))
  return (
    <div>
      <AddNewApparelForm addToState={addToState}/>
      <ApparelSearch query={query} setQuery={setQuery}/>
      {apparelComponents}
      </div>
  )
}

export default ApparelMerch