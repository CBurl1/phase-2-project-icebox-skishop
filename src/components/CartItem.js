import React from 'react'

function CartItem({description, category, gender, price, index}) {
  return (
      <tr>
          <td>{index+1}.</td>
          <td>{description} </td>
          <td>{category} </td>
          <td>{gender} </td>
          <td>${price}</td>
      </tr>
  )
}

export default CartItem