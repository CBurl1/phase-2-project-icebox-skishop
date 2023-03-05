import React from 'react'

function ApparelCard({brand, price, gender, description, image, year, id}) {
  return (
    <div>
        <div id={id} >
        <h2>{brand} <br/> {gender}</h2>
        <img src={image} alt={description}/>
        <p>{description} <br/>{year}<br/> </p>
        <p>{`$ ${price}.00`}</p>
    </div>
    </div>
  )
}

export default ApparelCard
