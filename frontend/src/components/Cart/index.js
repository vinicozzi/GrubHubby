import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../../store/cart';
import { useHistory } from 'react-router-dom';
import './cart.css';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleCheckout = () => {
    history.push('/checkout');
  };

  return (
    <div className="cart">
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
        <button onClick={handleCheckout}>Checkout</button>
      </div>
      <div className="clear-cart-btn">
        <button onClick={handleClearCart}>Clear Cart</button>
      </div>
    </div>
  );
};

export default Cart;
