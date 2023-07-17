import React, { useState } from 'react';
import CategoriesCarousel from '../Categories/carousel';
import RestaurantList from '../Restaurant/restaurantList';
import Navigation from '../MainNavigation/navigation';
import './main.css';

const MainComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="main-container">
      <Navigation />
      <div className="order-options">
        <h1>Delivery</h1>
        <h1>Pickup</h1>
      </div>
      <div className="carousel-container">
        <CategoriesCarousel onCategoryClick={handleCategoryClick} />
      </div>
      <div className="restaurant-list-container">
        <RestaurantList selectedCategory={selectedCategory} />
      </div>
    </div>
  );
};

export default MainComponent;
