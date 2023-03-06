import React, {useState, useEffect} from 'react'
import SnowboardCard from './SnowboardCard'
import AddNewSnowboardForm from './AddNewSnowboardForm'


function SnowboardMerch({snowboardUrl}) {
    const [snowboardsList, setSnowboardsList] = useState([])
    const [query, setQuery] = useState('')
    
    function addToState (boardObj){
        setSnowboardsList([...snowboardsList, boardObj])
    }
    useEffect(()=> {
        fetch(snowboardUrl )
          .then(r=>r.json())
          .then((boardsData) => {

            setSnowboardsList(boardsData)
          })
      },[])
    const snowboardComponents = snowboardsList.map(snowboard => (<SnowboardCard key={snowboard.id} {...snowboard}/>))

  return (
    <div>
        {snowboardComponents}
        <AddNewSnowboardForm addToState={addToState}/>
    </div>

  )
}

export default SnowboardMerch