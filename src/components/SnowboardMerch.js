import React, {useState, useEffect} from 'react'
import SnowboardCard from './SnowboardCard'
import AddNewSnowboardForm from './AddNewSnowboardForm'
import SnowBoardSearch from './SnowBoardSearch'

function SnowboardMerch({snowboardUrl}) {
    const [snowboardsList, setSnowboardsList] = useState([])
    const [query, setQuery] = useState('')

    function addToState (boardObj){
        setSnowboardsList([boardObj, ...snowboardsList])
    }
    useEffect(()=> {
        fetch(snowboardUrl )
          .then(r=>r.json())
          .then((boardsData) => {

            setSnowboardsList(boardsData)
          })
      },[])
      
      const search = snowboardsList.filter((snowboard) =>
                     snowboard.brand.toLowerCase().includes(query) ||
                     snowboard.description.toLowerCase().includes(query) ||
                     snowboard.category.toLowerCase().includes(query) ||
                     snowboard.gender.toLowerCase().includes(query) ||
                     snowboard.price.toString().includes(query) ||
                     snowboard.year.toString().includes(query)
      )

      const snowboardComponents = search.map(snowboard => (<SnowboardCard key={snowboard.id} {...snowboard}/>))

  return (
    <div>
        <AddNewSnowboardForm addToState={addToState}/>
        <SnowBoardSearch query={query} setQuery={setQuery}/>
        {snowboardComponents}

    </div>

  )
}

export default SnowboardMerch