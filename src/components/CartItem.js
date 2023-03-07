import React from 'react'

function CartItem({description, category, gender, price}) {
  return (
      <tr>
          <td>{description} </td>
          <td>{category} </td>
          <td>{gender} </td>
          <td>${price}</td>
      </tr>
  )
}

export default CartItem