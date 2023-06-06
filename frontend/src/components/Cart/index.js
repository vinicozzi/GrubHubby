// Cart.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../../store/cart';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
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
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.itemName} - {item.itemPrice}
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
