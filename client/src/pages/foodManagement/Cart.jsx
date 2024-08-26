import React from 'react';
import { useCart } from '../foodManagement/context/CartContext';
import cartStyles from '../../pages/foodManagement/styles/cart.module.css'

const Cart = () => {
  const { cart, dispatch } = useCart();

  const incrementQuantity = (id) => {
    dispatch({ type: 'INCREMENT_QUANTITY', payload: id });
  };

  const decrementQuantity = (id) => {
    dispatch({ type: 'DECREMENT_QUANTITY', payload: id });
  };

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  return (
    <div className="cart">
      <h2>Items Added to The Cart</h2>
      <table className={cartStyles.cartTable}>
        <thead>
          <tr>
            <th>#</th>
            <th>Food</th>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>
                <img src={item.imageUrl} alt={item.name} className={cartStyles.cartItemImage} />
              </td>
              <td>{item.name}</td>
              <td>
                <button onClick={() => decrementQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => incrementQuantity(item.id)}>+</button>
              </td>
              <td>Rs.{(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <button onClick={() => removeFromCart(item.id)} className="delete-btn">
                  🗑
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
