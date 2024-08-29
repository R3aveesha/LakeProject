import React from 'react';
import { useCart } from '../../pages/foodManagement/context/CartContext';

const FoodCard = ({ food }) => {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: food });
  };

  return (
    <div style={styles.foodCard}>
      <img src={food.imageUrl} alt={food.name} style={styles.foodImage} />
      <div style={styles.foodDetails}>
        <h3>{food.name}</h3>
        <p>{food.description}</p>
        <p>Rs.{food.price.toFixed(2)}</p>
        <div style={styles.foodRating}>
          <span>⭐ {food.rating}</span>
        </div>
      </div>
      <div style={styles.favoriteIcon}>💛</div>
      <button style={styles.addToCartBtn} onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
};

const styles = {
  foodCard: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    margin: '20px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    position: 'relative' // Ensure favorite icon can be positioned absolutely
  },
  foodCardHover: {
    transform: 'translateY(-5px)',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)'
  },
  foodImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderBottom: '1px solid #ddd'
  },
  foodDetails: {
    padding: '15px',
    textAlign: 'center'
  },
  foodDetailsTitle: {
    margin: '0',
    fontSize: '1.5em',
    color: '#333'
  },
  foodDetailsText: {
    margin: '5px 0',
    color: '#666'
  },
  foodRating: {
    marginTop: '10px',
    color: '#f39c12' // Gold color for stars
  },
  favoriteIcon: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    fontSize: '1.5em',
    color: '#f39c12',
    cursor: 'pointer'
  },
  addToCartBtn: {
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    padding: '10px',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
    textAlign: 'center',
    fontSize: '1em',
    marginTop: '10px',
    transition: 'background-color 0.3s ease'
  },
  addToCartBtnHover: {
    backgroundColor: '#218838'
  }
};

export default FoodCard;
