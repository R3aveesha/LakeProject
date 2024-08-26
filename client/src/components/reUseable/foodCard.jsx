import React from 'react';
import { useCart } from '../../pages/foodManagement/context/CartContext';

const FoodCard = ({ food }) => {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: food });
  };

  return (
    <div className="food-card">
      <img src={food.imageUrl} alt={food.name} className="food-image" />
      <div className="food-details">
        <h3>{food.name}</h3>
        <p>{food.description}</p>
        <p>Rs.{food.price.toFixed(2)}</p>
        <div className="food-rating">
          <span>⭐ {food.rating}</span>
        </div>
      </div>
      <div className="favorite-icon">💛</div>
      <button className="add-to-cart-btn" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default FoodCard;
