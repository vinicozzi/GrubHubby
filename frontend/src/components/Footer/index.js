import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = ({ restaurants }) => {
  const randomRestaurants = restaurants.sort(() => Math.random() - Math.random()).slice(0, 3);


  const renderRatingStars = (rating) => {
    const roundedRating = Math.round(rating);
    const starCount = Math.min(roundedRating, 5);
  
    return (
      <div className="restaurant-card-rating">
        {[...Array(starCount)].map((_, index) => (
          <i key={index} className="fas fa-star checked"></i>
        ))}
        {[...Array(5 - starCount)].map((_, index) => (
          <i key={index} className="fas fa-star"></i>
        ))}
    <span className="restaurant-card-rating-text">{Math.floor(Math.random() * 100)} Ratings</span>
      </div>
    );
  };

  return (
    <div className="container-down">
      <h3>Other Restaurants In Your Area</h3>
      <div className="other-restaurants-container">
        {randomRestaurants.map((restaurant) => (
          <Link to={`/restaurants/${restaurant.id}`} key={restaurant.id}>
            <div className="other-restaurant">
              <img src={restaurant.photo} alt="Restaurant" />
              <div className="details-footer">
                <h4 className="other-restaurant-name">{restaurant.name}</h4>
                <p className="restaurant-category">{restaurant.category}</p>
                <div className="details-delivery">
                  <p>15-30 min</p>
                  <p>$2.99 Delivery</p>
                </div>
                <div className="other-restaurant-card-rating">
                {renderRatingStars(restaurant.rating)}
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
