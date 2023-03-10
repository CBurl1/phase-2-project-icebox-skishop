import React, {useState} from 'react'
import { Button, Card } from 'react-bootstrap';


function SkiCard({removeSkis, countLikes, likes, brand, price, gender, description, image, year, id, category}) {
   const [skiLikes, setSkiLikes]= useState(likes)

   function addToCart(){
    const cartItem ={
      image: image,
      description: description,
      gender: gender,
      price: price,
      category: category
    }
    fetch("http://localhost:3000/cart", {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(cartItem)
    })

  }
   function handleDelete() {
    removeSkis(id)
    fetch(`http://localhost:3000/skis/${id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
  }

   function addLikes() {
    const newLikes = skiLikes + 1

    fetch(`http://localhost:3000/skis/${id}`, {
      method: 'PATCH',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({likes:newLikes})
    })
    .then(r => r.json())
    .then(data => {
      countLikes(data)
      setSkiLikes(newLikes)

    })
  }

  return (
    <Card style={{ width: '10rem' }}>
      <Card.Body>
        <Card.Title>{brand}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{gender}</Card.Subtitle>
        <Card.Img className='img-fluid' style={{ width: "auto", height: "250px",  }} src={image} alt={description} />
        <Card.Text>
          {description} <br />
          {year}
        </Card.Text>
        <Card.Text>{`$ ${price}.00`}</Card.Text>
        <Button variant="primary" onClick={addLikes}>
          💙 {skiLikes}
        </Button>
        <Button onClick={addToCart} variant="success">Add to Cart</Button>
        <Button variant="danger" onClick={() => handleDelete(id)}>
          X
        </Button>
      </Card.Body>
    </Card>
  )
}

export default SkiCard