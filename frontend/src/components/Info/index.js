import './info.css'
import React from 'react';

const RestaurantInfo = ({ address, hours, priceRating, phoneNumber, categories, description }) => {
  return (
    <div className="restaurant-info">
      
      <h4>Address</h4>
      <p>{address}</p>

      <h4>Hours</h4>
      <p>{hours}</p>

      <h4>Price Range</h4>
      <p>{priceRating}</p>

      <p>{description}</p>

      {/* <h3>Phone Number</h3>
      <p>{phoneNumber}</p> */}

      {/* <h3>Categories</h3>
      <ul>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default RestaurantInfo;
