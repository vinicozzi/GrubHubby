import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import * as restaurantActions from '../../store/restaurants';
import "./RestaurantList.css";

const RestaurantList = () => {
    const dispatch = useDispatch();
    const restaurants = useSelector((state) => Object.values(state.restaurants));
  
    useEffect(() => {
      dispatch(restaurantActions.fetchRestaurants());
    }, []);
  
    return (
      <div className="homePageRestaurantList">
        {restaurants.map((restaurant) => (
          <NavLink key={restaurant.id} to={`/restaurants/${restaurant.id}`}>
            <div className="restaurant-info">
              <span className="restaurant-name">
                    {restaurant.name}<br />
              </span>
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