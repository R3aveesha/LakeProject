import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import axios from 'axios'; // Import axios outside the component
import NavBar from "../../components/core/NavBar";
import Footer from "../../components/core/Footer";
import styles from '../../pages/foodManagement/styles/updateFood.module.css';
import { useNavigate } from 'react-router-dom';

const UpdateFoodItems = () => {
  const { id } = useParams(); // Destructure id from useParams
const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    ingredients: '',
    category: 'Appetizer',
    price: '',
    isAvailable: false,
    imageUrl: ''
  });

  useEffect(() => {
    // Fetch the current food item details when component mounts
    const fetchFoodItem = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/food/${id}`);
        const data = response.data;
        setFormData({
          name: data.name,
          ingredients: data.ingredients.join(', '), // Assuming ingredients is an array
          category: data.category,
          price: data.price,
          isAvailable: data.isAvailable,
          imageUrl: data.imageUrl
        });
      } catch (error) {
        console.error('Error fetching food item:', error.response ? error.response.data : error.message);
      }
    };

    fetchFoodItem();
  }, [id]); // Fetch data when id changes

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ingredientsArray = formData.ingredients.split(',').map(ingredient => ingredient.trim());
    const updatedData = { ...formData, ingredients: ingredientsArray };

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', updatedData.name);
      formDataToSend.append('ingredients', JSON.stringify(updatedData.ingredients));
      formDataToSend.append('category', updatedData.category);
      formDataToSend.append('price', updatedData.price);
      formDataToSend.append('isAvailable', updatedData.isAvailable);
      if (updatedData.imageUrl) {
        formDataToSend.append('imageUrl', updatedData.imageUrl);
      }

      const response = await axios.put(`http://localhost:3000/api/food/update/${id}`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Food item updated:', response.data);
      // Handle success (e.g., redirect or show a success message)
      navigate('/manageFoods');
    
    } catch (error) {
      console.error('Error updating food item:', error.response ? error.response.data : error.message);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <>
      <NavBar />
      <div className={styles.updateFoodItem}>
        <h2>Update Food Item</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Item Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Ingredients:</label>
            <input
              type="text"
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
            />
            <small>Enter ingredients separated by commas</small>
          </div>
          <br /><br />
          <div>
            <label>Category:</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
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
              value={formData.price}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Available:</label>
            <input
              type="checkbox"
              name="isAvailable"
              checked={formData.isAvailable}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Image URL:</label>
            <input
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Update Item</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default UpdateFoodItems;
