import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as restaurantActions from "../../store/restaurants";
import { Link } from "react-router-dom";
import "./RestaurantList.css";

const RestaurantList = () => {
  const dispatch = useDispatch();
  const restaurants = useSelector(state => state.restaurants.allRestaurants);
  

  useEffect(() => {
    dispatch(restaurantActions.fetchRestaurants());
  }, [dispatch]);

  const handleRestaurantClick = (restaurantId) => {
    dispatch(restaurantActions.fetchRestaurant(restaurantId));
  };

  return (
    <div className="main-container">
  <div className="restaurant-index-container">
    {/* Restaurant list */}
    {Object.values(restaurants).map((restaurant) => (
      <div key={restaurant.id} className="restaurant-card s-card--horizontal u-height--full">
        <div className="restaurant-card-image">
          <Link to={`/restaurants/${restaurant.id}`} onClick={() => handleRestaurantClick(restaurant.id)}>
            <img src={restaurant.photo} alt={restaurant.name} />
          </Link>
          {/* <p>{restaurant.name}</p> */}
        </div>
        <div className="restaurant-card-details">
          <h5 className="restaurant-card-title">
            {/* <Link to={`/restaurants/${restaurant.id}`} onClick={() => handleRestaurantClick(restaurant.id)}>
              {restaurant.name}
            </Link> */}
          </h5>
          <div className="restaurant-card-description">
            {restaurant.isFeatured && <span className="restaurant-card-badge">Featured</span>}
            {restaurant.hasSubscription && <span className="restaurant-card-badge">Subscription</span>}
            <span className="restaurant-card-cuisine">{restaurant.cuisine}</span>
          </div>
          <div className="restaurant-card-rating">
            <span className="restaurant-card-starred-rating">{restaurant.rating}</span>
            <span className="restaurant-card-rating-text">{restaurant.reviewCount} ratings</span>
          </div>
          <div className="restaurant-card-wait-time">{restaurant.waitTime}15-25 min</div>
          <div className="restaurant-card-delivery-price">$2.99{restaurant.deliveryPrice} delivery</div>
        </div>
      </div>
    ))}
  </div>
</div>
  );
};

export default RestaurantList;
