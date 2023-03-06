import React from 'react'


function SkiCard({removeSkis,brand, price, gender, description, image, year, id}) {
  function handleDelete() {
    removeSkis(id)
    fetch(`http://localhost:3000/skis/${id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
  }
  return (
    <div id={id} >
        <h2>{brand} <br/> {gender}</h2>
        <img src={image} alt={description}/>
        <p>{description} <br/>{year}<br/> </p>
        <p>{`$ ${price}.00`}</p>
        <button>Add to Cart</button><small><button onClick={()=>handleDelete(id)}>X</button></small>


    </div>
  )
}

export default SkiCard