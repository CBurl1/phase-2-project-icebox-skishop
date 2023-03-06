import React from 'react'


function Skicard({brand, price, gender, description, image, year, id}) {
  return (
    <div id={id} >
        <h2>{brand} <br/> {gender}</h2>
        <image src={image}/>
        <p>{description} <br/>{year}<br/> </p>
        <p>{`$ ${price}.00`}</p>

    </div>
  )
}

export default Skicard