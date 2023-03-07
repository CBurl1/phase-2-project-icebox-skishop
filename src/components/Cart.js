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
        <table className="ui celled striped padded table">
            <tbody>
                <tr>
                    <th>
                        <h3 className="ui center aligned header">Description</h3>
                    </th>
                    <th>
                        <h3 className="ui center aligned header">Category</h3>
                    </th>
                    <th>
                        <h3 className="ui center aligned header">Gender</h3>
                    </th>
                    <th>
                        <h3 className="ui center aligned header">Amount</h3>
                    </th>
                    </tr>
                    {merchComponents}
            </tbody>
        </table>
    </div>
  )
}

export default Cart
