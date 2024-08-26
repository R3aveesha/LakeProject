import React from 'react'
import NavBar from "../../components/core/NavBar";
import Footer from "../../components/core/Footer";
import styles from '../../pages/foodManagement/styles/updateFood.module.css'

const UpdateFoodItems = () => {
  return (
    <>
      <NavBar/>
      <div className={styles.updateFoodItem}>
      <h2>Update Food Item</h2>
      <form /* onSubmit={handleSubmit} */>
        <div>
          <label>Item Name:</label>
          <input
            type="text"
            name="name"
            //value={formData.name}
            //onChange={handleChange}
          />
        </div>
        <div>
          <label>Ingredients:</label>
          <input
            type="text"
            name="ingredients"
            //value={formData.ingredients}
            //onChange={handleChange}
          />
          <small>Enter ingredients separated by commas</small>
        </div>
        <br /><br />
        <div>
          <label>Category:</label>
          <select
            name="category"
            //value={formData.category}
            //onChange={handleChange}
          >
            <option value="Appetizer">Appetizer</option>
            <option value="Main Course">Main Course</option>
            <option value="Beverage">Beverage</option>
            <option value="Dessert">Dessert</option>
            <option value="Pizza">Pizza</option>
          </select>
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            //value={formData.price}
            //onChange={handleChange}
          />
        </div>
        <div>
          <label>Available:</label>
          <input
            type="checkbox"
            name="isAvailable"
            //checked={formData.isAvailable}
            //onChange={handleChange}
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            name="imageUrl"
            //value={formData.imageUrl}
            //={handleChange}
          />
        </div>
        <button type="submit">Update Item</button>
      </form>
    </div>
      <Footer/>
    </>
  )
}

export default UpdateFoodItems
