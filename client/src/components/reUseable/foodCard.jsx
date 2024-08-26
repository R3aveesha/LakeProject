import React from 'react';
import styles from '../../pages/foodManagement/styles/food.module.css';
import CartStyles from '../../pages/foodManagement/styles/cart.module.css'
import { useCart } from '../../pages/foodManagement/context/CartContext';

const FoodCard = ({ food }) => {
  const { dispatch } = useCart();
  
  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: food });
  };

  return (
    <div className={styles.oodCard}>
      <img src={food.imageUrl} alt={food.name} className={styles.foodImage} />
      <div className={styles.foodDetails}>
        <h3>{food.name}</h3>
        <p>{food.description}</p>
        <p>Rs.{food.price.toFixed(2)}</p>
        <div className={styles.foodRating}>
          <span>⭐ {food.rating}</span>
        </div>
      </div>
      <div className={styles.favoriteIcon}>💛</div>
      <button className={CartStyles.addToCartBtn} onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default FoodCard;
