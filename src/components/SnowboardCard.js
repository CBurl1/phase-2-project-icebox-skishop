import React from 'react'

function SnowboardCard({brand, price, gender, description, image, year, id}) {
  function handleDelete() {
    fetch(`http://localhost:3000/snowboards/${id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
      .then(r=>r.json())
      .then( result => {
        console.log(result)
      })

  }

  return (
    <div id={id}>
        <h2>{brand} | {gender}</h2>
        <img src={image} alt={description}/>
        <p>{description} <br/>{year}<br/> </p>
        <p>{`$ ${price}.00`} </p>
        <button>Add to Cart</button><small><button onClick={()=>handleDelete(id)}>X</button></small>

    </div>
  )
}

export default SnowboardCard
