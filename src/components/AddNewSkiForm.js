import React, {useState} from 'react'

function AddNewSkiForm({addToState}) {
    const [newBrand, setBrand] = useState('')
    const [newDescription, setDescription] = useState('')
    const [newYear, setYear] = useState('')
    const [newPrice, setPrice] = useState('')
    const [newGender, setGender] = useState('')
    const [newImage, setImage] = useState('')

    const handleBrand = (e)=> setBrand(e.target.value)
    const handleDeets = (e)=> setDescription(e.target.value)
    const handleYear = (e)=> setYear(e.target.value)
    const handlePrice = (e)=> setPrice(parseInt(e.target.value |0))
    const handleGender = (e)=> setGender(e.target.value)
    const handleImage = (e)=> setImage(e.target.value)


    function handleSubmit(e){
      e.preventDefault()
      const newSki = {
        brand: newBrand,
        description: newDescription,
        year: newYear,
        price: newPrice,
        gender: newGender,
        image: newImage
    }
    fetch("http://localhost:3000/skis",{
      method: "POST",
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(newSki)
      })
      .then(r=>r.json)
      .then(addToState(newSki))

    e.target.reset()
    }

  return (
      <div className="new-ski-form">
      <h2>New Ski</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleBrand} type="text" name="brand" placeholder="Fill Brand" />
        <input onChange={handleDeets} type="text" name="description" placeholder="Fill Description" />
        <input onChange={handleYear} type="text" name="year" placeholder="Fill Year" />
        <input onChange={handleGender} type="text" name="gender" placeholder="Fill Gender" />
        <input onChange={handleImage} type="text" name="image" placeholder="Image URL" />
        <input  onChange={handlePrice}type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Ski</button>
      </form>
    </div>
  )
}

export default AddNewSkiForm