import React,{useState, useEffect} from 'react'
import CartItem from './CartItem'

function Cart() {
    const [cartList, setCartList]= useState([])

    function removeItem(doomedId){
        const newCart = cartList.filter(cartObj => {
            return cartObj.id !== doomedId
        })
        setCartList(newCart)
    }

    useEffect(()=> {
        fetch("http://localhost:3000/cart")
        .then(r=> r.json())
        .then(cartData => {
            setCartList(cartData)}
        )
    },[])

    const merchComponents = [...cartList].map((item, index) => {
        return <CartItem {...item} key={item.id} removeItem={removeItem} index={index}/>
    })
    const merchPrice = [...cartList].map(item => {
        return item.price
    })
    const total = merchPrice.reduce((initialTotal, price) => price + initialTotal, 0)
  return (
    <div>
        <table className="ui celled striped padded table">
            <tbody>
                <tr>
                    <th>
                        <h3 className="ui center aligned header">No.</h3>
                    </th>
                    <th>
                        <h3 className="ui center aligned header">Image</h3>
                    </th>
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

        <h2 style={{textAlign: "center"}}>Total: ${total}</h2>
    </div>
  )
}

export default Cart
