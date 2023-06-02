import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import * as restaurantActions from '../../store/restaurants';
import { Link } from "react-router-dom";

import "./RestaurantList.css";

const RestaurantList = () => {
    const dispatch = useDispatch();
    const restaurants = useSelector((state) => restaurantActions.getRestaurants(state));
    console.log(restaurants)
    useEffect(() => {
      dispatch(restaurantActions.fetchRestaurants());
    }, []);


    const handleRestaurantClick = (restaurantId) => {
      dispatch(restaurantActions.fetchRestaurant(restaurantId));
    };

  
    return (
      <div className="homePageRestaurantList">
        
        {restaurants.map((restaurant) => (
         <NavLink key={restaurant.id} to={`/restaurants/${restaurant.id}`}>
         <Link
           to={`/restaurants/${restaurant.id}`}
           onClick={() => handleRestaurantClick(restaurant.id)}
        >
           {restaurant.name}
         </Link>
            <div className="restaurant-info">
              <span className="restaurant-address">
                    Address: {restaurant.address}<br />
              </span>
              <span className="restaurant-description">
                    Description: {restaurant.description}<br />
                </span>
                <span className="restaurant-hours">
                    Hours: {restaurant.hours}<br />
                </span>
                <span className="restaurant-rating">
                    Rating: {restaurant.rating}<br />
                </span>          
            </div>
          </NavLink>
        ))}
      </div>
    );
  };

  
export default RestaurantList;

