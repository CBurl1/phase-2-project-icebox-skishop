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
          <td><img src={image} alt={description} style={{ width: "100px", height: "150px",  }}></img></td>
          <td>{description} </td>
          <td>{category} </td>
          <td>{gender} </td>
          <td>${price}</td>
          <button onClick={handleDelete}>X</button>
      </tr>
    </>

  )
}

export default CartItem