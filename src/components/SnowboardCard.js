import React, {useState} from 'react'

function SnowboardCard({countLikes, likes, removeBoard, brand, price, gender, description, image, year, id}) {
  const [boardLikes, setBoardLikes] = useState(likes)
  function addLikes() {
    const newLikes = boardLikes + 1
    
    fetch(`http://localhost:3000/snowboards/${id}`, {
      method: 'PATCH',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({likes:newLikes})
    })
    .then(r => r.json())
    .then(data => {
      countLikes(data)
      setBoardLikes(newLikes)

    })
  }
  function handleDelete() {
    removeBoard(id)
    fetch(`http://localhost:3000/snowboards/${id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
  }

  return (
    <div id={id}>
        <h2>{brand} | {gender}</h2>
        <img src={image} alt={description}/>
        <p>{description} <br/>{year}<br/> </p>
        <p>{`$ ${price}.00`} </p>
        <button onClick={addLikes}>💙 <br/> {boardLikes}</button>
        <button>Add to Cart</button><small><button onClick={()=>handleDelete(id)}>X</button></small>

    </div>
  )
}

export default SnowboardCard
