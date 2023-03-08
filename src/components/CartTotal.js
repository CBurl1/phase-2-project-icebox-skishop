import React from 'react'

function CartTotal({total}) {
console.log(total)

    function getTotalPrice(total) {
        let newTotal = 0
            newTotal = newTotal + total
            return newTotal
    }

    const totalAmount = getTotalPrice(total)
  return (
    <div>
        Total: {totalAmount}
    </div>
  )
}

export default CartTotal
