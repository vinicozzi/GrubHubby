import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as restaurantActions from '../../store/restaurants';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './RestaurantList.css';

const RestaurantList = () => {
  const dispatch = useDispatch();
  const allRestaurants = useSelector((state) => state.restaurants.allRestaurants);
  const filteredRestaurants = useSelector((state) => state.restaurants.filteredRestaurants);
  const currentCategory = useSelector((state) => state.restaurants.currentCategory);

  useEffect(() => {
    dispatch(restaurantActions.fetchRestaurants());
  }, [dispatch]);

  useEffect(() => {
    if (currentCategory) {
      dispatch(restaurantActions.fetchFilteredRestaurants(currentCategory));
    }
  }, [dispatch, currentCategory]);

  const restaurants = currentCategory ? filteredRestaurants : allRestaurants;

  const handleRestaurantClick = (restaurantId) => {
    dispatch(restaurantActions.fetchRestaurant(restaurantId));
  };

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
  
  console.log(restaurants);

  return (
    <div className="main-container">
      <h3 className="restaurant-results">
        {Object.values(restaurants).length === 1
          ? '1 Result'
          : Object.values(restaurants).length === 0
          ? 'No Results Found'
          : `${Object.values(restaurants).length} Results`}
      </h3>
      <div className="restaurant-index-container">
        {Object.values(restaurants).map((restaurant) => (
          <div key={restaurant.id} className="restaurant-card">
            <div className="restaurant-card-image">
              <Link to={`/restaurants/${restaurant.id}`} onClick={() => handleRestaurantClick(restaurant.id)}>
                <img src={restaurant.photo} alt={restaurant.name} />
              </Link>
            </div>
            <div className="restaurant-card-details">
              <h5 className="restaurant-card-title">{restaurant.name}</h5>
              <h6 className="restaurant-card-category">{restaurant.category}</h6>
              <div className="restaurant-card-rating">
                {renderRatingStars(restaurant.rating)}
              </div>
              <div className="restaurant-card-wait-time">15-30 min</div>
              <div className="restaurant-card-delivery-price">$2.99 Delivery</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
