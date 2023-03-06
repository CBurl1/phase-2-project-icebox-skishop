import React from 'react'


function Skicard({brand, price, gender, description, image, year, id}) {
  return (
    <div id={ski.id} key={ski.id}>
        <h2>{ski.brand} <br/> {ski.gender}</h2>
        <image src={ski.image}/>
        <p>{ski.description} <br/>{ski.year}<br/> </p>
        <p>{`$ ${ski.price}.00`}</p>

    </div>
  )
}

export default Skicard