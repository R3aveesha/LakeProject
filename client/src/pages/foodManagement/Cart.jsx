import React from 'react';
import { useCart } from '../foodManagement/context/CartContext';
import styles from '../../pages/foodManagement/styles/cart.module.css';
import NavBar from '../../components/core/NavBar';
import Footer from '../../components/core/Footer';

const Cart = () => {
  const { cart, dispatch } = useCart();

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  return (
    <>
    <NavBar name="foods" />
    <div className={styles.cart}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <img src={item.imageUrl} alt={item.name} className={styles.cartItemImage} />
            <div className={styles.cartItemDetails}>
              <h3>{item.name}</h3>
              <p>Rs.{item.price.toFixed(2)}</p>
            </div>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
    <Footer/>
    </>
  );
}

export default Cart;
