import React, { useState } from "react";
import { useCart } from "./context/CartContext";
import styles from "./styles/cart.module.css"; // Adjust the path as needed
import NavBar from "../../components/core/NavBar";
import Footer from "../../components/core/Footer";
import { json, useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, dispatch } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleRemove = (_id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: _id });
  };

  const handleQuantityChange = (_id, quantity) => {
    if (quantity < 1) return; // Prevent setting quantity less than 1
    dispatch({ type: "UPDATE_QUANTITY", payload: { _id, quantity } });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredCart = cart.filter((item) =>
    item.name.toLowerCase().includes(searchQuery)
  );

  // Calculate total prices
  const totalItemsPrice = cart.reduce(
    (total, item) => total + (item.price || 0) * item.quantity,
    0
  );

  const handlenavigate = () => {
    navigate("/foodPurchase");
    localStorage.setItem('cart',JSON.stringify(cart));
  }


  return (
    <div>
      <NavBar />
      <div className={styles.cart}>
        <h2>Your Cart</h2>
        <input
          type="text"
          placeholder="Search your cart..."
          value={searchQuery}
          onChange={handleSearchChange}
          className={styles.searchInput}
        />
        {filteredCart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          filteredCart.map((item) => (
            <div key={item._id} className={styles.cartItem}>
              <img
                src={item.imageUrl || "default-image-url.jpg"}
                alt={item.name}
                className={styles.cartItemImage}
              />
              <div className={styles.cartItemDetails}>
                <h3>{item.name}</h3>
                <p>Rs.{(item.price || 0).toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
                <p>
                  Total: Rs.{((item.price || 0) * item.quantity).toFixed(2)}
                </p>
                <button onClick={() => handleRemove(item._id)}>Remove</button>
                <button
                  onClick={() =>
                    handleQuantityChange(item._id, item.quantity + 1)
                  }
                >
                  Increase Quantity
                </button>
                <button
                  onClick={() =>
                    handleQuantityChange(item._id, item.quantity - 1)
                  }
                >
                  Decrease Quantity
                </button>
              </div>
            </div>
          ))
        )}
        <div className={styles.cartTotal}>
          <h3>Total Price: Rs.{totalItemsPrice.toFixed(2)}</h3>
        </div>
        <button onClick={handlenavigate}>Proceed to checkout</button>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
