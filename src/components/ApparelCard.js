import React, {useState} from 'react'

function ApparelCard({removeApparel, countLikes, likes, brand, price, gender, description, image, year, id}) {
  const [apparelLikes, setApparelLikes] = useState(likes)
  function handleDelete(){console.log('hello')}

  function addLikes() {
    const newLikes = apparelLikes + 1

    fetch(`http://localhost:3000/apparel/${id}`, {
      method: 'PATCH',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({likes:newLikes})
    })
    .then(r => r.json())
    .then(data => {
      countLikes(data)
      setApparelLikes(newLikes)

    })
  }
  function handleDelete() {
    removeApparel(id)
    fetch(`http://localhost:3000/apparel/${id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
  }
  return (
    <div>
        <div id={id} >
        <h2>{brand} <br/> {gender}</h2>
        <img src={image} alt={description}/>
        <p>{description} <br/>{year}<br/> </p>
        <p>{`$ ${price}.00`}</p>
        <button onClick={addLikes}>💙 <br/> {apparelLikes}</button>
        <button>Add to Cart</button><small><button onClick={()=>handleDelete(id)}>X</button></small>
    </div>
    </div>
  )
}

export default ApparelCard
