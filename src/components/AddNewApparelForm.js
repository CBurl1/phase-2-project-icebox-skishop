import React, {useState} from 'react'

function AddNewApparelForm({addToState}) {
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
      const newApparel = {
        brand: newBrand,
        description: newDescription,
        year: newYear,
        price: newPrice,
        gender: newGender,
        image: newImage
    }
    addToState(newApparel)
    }
    
  return (
      <div className="new-apparel-form">
      <h2>New Apparel</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleBrand} type="text" name="brand" placeholder="Fill Brand" />
        <input onChange={handleDeets} type="text" name="description" placeholder="Fill Description" />
        <input onChange={handleYear} type="text" name="year" placeholder="Fill Year" />
        <input onChange={handleGender} type="text" name="gender" placeholder="Fill Description" />
        <input onChange={handleImage} type="text" name="image" placeholder="Image URL" />
        <input  onChange={handlePrice}type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Apparel</button>
      </form>
    </div>
  )
}

export default AddNewApparelForm