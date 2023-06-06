// Cart.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../../store/cart';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  debugger 
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId) => {
    debugger 
    dispatch(removeFromCart(itemId));
  };

  const handleClearCart = () => {
    debugger 
    dispatch(clearCart());
  };

  debugger 
  return (
    <div className="cart">
    <h2>Cart</h2>
    {cartItems.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <span className="item-name">{item.itemName}</span> - {item.itemPrice}
            <button
              className="remove-btn"
              onClick={() => handleRemoveItem(item.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    )}
    <div className="checkout-btn">
      <button onClick={handleClearCart}>Clear Cart</button>
    </div>
  </div>
  );
};

export default Cart;
