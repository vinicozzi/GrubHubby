import React from 'react';
import CategoriesCarousel from '../Categories/carousel'
import RestaurantList from '../Restaurant/restaurantList';
import Navigation from '../MainNavigation/navigation';

import './main.css'

const MainComponent = () => {
    return (
        <div className="main-container">
            <Navigation />
            <div className="order-options">
                <h1>Delivery</h1>
                <h1>Pickup</h1>
            </div>
          <div className="carousel-container">
            <CategoriesCarousel />
          </div>
          <div className="restaurant-list-container">
            <RestaurantList />
          </div>
        </div>
      );
};

export default MainComponent;
