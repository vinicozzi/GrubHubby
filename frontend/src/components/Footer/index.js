import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = ({ restaurants }) => {
  const randomRestaurants = restaurants.sort(() => Math.random() - Math.random()).slice(0, 3);

  return (
    <div className="container-down">
      <h3>Other Restaurants In Your Area</h3>
      <div className="other-restaurants-container">
        {randomRestaurants.map((restaurant) => (
          <Link to={`/restaurants/${restaurant.id}`} key={restaurant.id}>
            <div className="other-restaurant">
              <img src={restaurant.photo} alt="Restaurant" />
              <div className="details-footer">
                <h4>{restaurant.name}</h4>
                <p>{restaurant.category}</p>
                <div className="details-delivery">
                  <p>Delivery Time: 30 min</p>
                  <p>Delivery Price: $2.99</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
