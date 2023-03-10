import React, {useState, useEffect} from 'react'
import ApparelCard from './ApparelCard'
import AddNewApparelForm from './AddNewApparelForm'
import ApparelSearch from './ApparelSearch'
import { Row, Col } from 'react-bootstrap';

function ApparelMerch({apparelUrl}) {

  const [apparelList , setApparelList] = useState([])
  const [query, setQuery] = useState('')
  const [showForm, setShowForm] = useState(false);
  function removeApparel(doomedId) {
    const newList = apparelList.filter(appObj => {
      return appObj.id !== doomedId
    })
    setApparelList(newList)
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

    const apparelComponents = search.map(apparel => {
      return (
          <Col xs={12} md={4}>
            <ApparelCard key={apparel.id} {...apparel} countLikes={countLikes} removeApparel={removeApparel}/>
          </Col>
      )
  })

    function handleClick() {
      setShowForm((showForm) => !showForm);
    }

    return (
    <div>
      {showForm ? <AddNewApparelForm addToState={addToState}/> : null }
      <div className="buttonContainer">
          <button className='rounded' onClick={handleClick}>{showForm ? "Hide Form" : "Add an Apparel"}</button>
      </div>
      <ApparelSearch query={query} setQuery={setQuery}/>
      <br/>
      <br/>
      <Row className="justify-content-md-center">
        {apparelComponents}
      </Row>
      
      </div>
  )
}

export default ApparelMerch