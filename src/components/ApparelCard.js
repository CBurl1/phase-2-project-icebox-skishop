import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

function ApparelCard({ removeApparel, countLikes, likes, brand, price, gender, category, description, image, year, id }) {
  const [apparelLikes, setApparelLikes] = useState(likes);

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

  function addLikes() {
    const newLikes = apparelLikes + 1;

    fetch(`http://localhost:3000/apparel/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ likes: newLikes })
    })
      .then(r => r.json())
      .then(data => {
        countLikes(data);
        setApparelLikes(newLikes);
      });
  }

  function handleDelete() {
    removeApparel(id);
    fetch(`http://localhost:3000/apparel/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    });
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{brand}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{gender}</Card.Subtitle>
        <Card.Img className='img-fluid' style={{ width: "auto", height: "200px",  }} src={image} alt={description} />
        <Card.Text>
          {description} <br />
          {year}
        </Card.Text>
        <Card.Text>{`$ ${price}.00`}</Card.Text>
        <Button variant="primary" onClick={addLikes} className="btn-sm" data-bs-toggle="button">
          💙 {apparelLikes} Likes
        </Button>
        <Button onClick={addToCart} variant="success" className="btn-sm">Add to Cart</Button>
        <Button variant="danger" onClick={() => handleDelete(id)} className="btn-sm">
          X
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ApparelCard;
