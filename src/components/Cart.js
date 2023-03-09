import React,{useState, useEffect} from 'react'
import CartItem from './CartItem'

function Cart() {
    const [cartList, setCartList]= useState([])

    useEffect(()=> {
        fetch("http://localhost:3000/cart")
        .then(r=> r.json())
        .then(cartData => setCartList(cartData)
        )
    },[])

    const merchComponents = cartList.map(item => {
    return <CartItem {...item} key={item.id}/>
})
  return (
    <div>
        {merchComponents}
    </div>
  )
}

export default Cart
