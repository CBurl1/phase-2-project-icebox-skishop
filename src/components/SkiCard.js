import React, {useState} from 'react'


function SkiCard({removeSkis, countLikes, likes, brand, price, gender, description, image, year, id}) {
   const [skiLikes, setSkiLikes]= useState(likes)
   function handleDelete() {
    removeSkis(id)
    fetch(`http://localhost:3000/skis/${id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
  }

   function addLikes() {
    const newLikes = skiLikes + 1
    
    fetch(`http://localhost:3000/skis/${id}`, {
      method: 'PATCH',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({likes:newLikes})
    })
    .then(r => r.json())
    .then(data => {
      countLikes(data)
      setSkiLikes(newLikes)

    })
  }
   
  return (
    <div id={id} >
        <h2>{brand} <br/> {gender}</h2>
        <img src={image} alt={description}/>
        <p>{description} <br/>{year}<br/> </p>
        <p>{`$ ${price}.00`}</p>
        <button onClick={addLikes}>💙 <br/> {skiLikes}</button>
        <button>Add to Cart</button><small><button onClick={()=>handleDelete(id)}>X</button></small>


    </div>
  )
}

export default SkiCard