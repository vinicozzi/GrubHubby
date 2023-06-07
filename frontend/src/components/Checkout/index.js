import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './checkout.css'

const CheckoutComponent = () => {
  const cartItems = useSelector(state => state.cart.items);

  // Calculate the total price of the order
  const totalPrice = cartItems.reduce((total, item) => total + item.itemPrice, 0);

  // Function to handle the checkout process
  const handleCheckout = () => {
    // You can make an API call here to process the order
    // For simplicity, let's simulate a checkout by logging the order details to the console
    console.log('Order details:');
    console.log('----------------');
    cartItems.forEach(item => {
      console.log(`${item.name} - $${item.price}`);
    });
    console.log('----------------');
    console.log(`Total: $${totalPrice}`);
    console.log('Order placed successfully!');
  };

  return (
    <div>
      <h1>Checkout</h1>

      <h2>Order Summary:</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.itemName} - ${item.itemPrice}
          </li>
        ))}
      </ul>

      <p>Total: ${totalPrice}</p>

      <h2>Delivery TimeFrame:</h2>
      <p>Estimated delivery time: 30 minutes</p>

      <img src="/path/to/driver-animation.gif" alt="Driver Animation" />

      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default CheckoutComponent;
