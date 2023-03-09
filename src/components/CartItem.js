import React from 'react'

function CartItem({id, description, category, gender, price, removeItem}) {
    function handleDelete (){
        removeItem(id)
        fetch(`http://localhost:3000/cart/${id}`, {
            method: 'DELETE',
        })
    }
  return (
      <tr>
          <td>{description} </td>
          <td>{category} </td>
          <td>{gender} </td>
          <td>${price}</td>
          <button onClick={handleDelete}>X</button>
      </tr>
  )
}

export default CartItem