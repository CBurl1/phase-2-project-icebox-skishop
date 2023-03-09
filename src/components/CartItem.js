import React from 'react'

function CartItem({description, category, gender, price}) {
  return (
    <div>
        <p>`{description} {category} Gender: {gender} Price: {price}</p>
    </div>
  )
}

export default CartItem