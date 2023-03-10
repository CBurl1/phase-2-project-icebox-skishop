import React from 'react'

function CartItem({id, description, category, gender, price, removeItem, index, image}) {

    function handleDelete (){
        removeItem(id)
        fetch(`http://localhost:3000/cart/${id}`, {
            method: 'DELETE',
        })
    }

  return (
    <>
      <tr>
          <td>{index+1}.</td>
          <td><img className='img-fluid' src={image} alt={description} style={{ width: "auto", height: "200px",  }}></img></td>
          <td>{description} </td>
          <td>{category} </td>
          <td>{gender} </td>
          <td>${price}</td>
          <button className='border-0'onClick={handleDelete}>X</button>
      </tr>
    </>

  )
}

export default CartItem