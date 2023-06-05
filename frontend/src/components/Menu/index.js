import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRestaurant } from '../../store/restaurants';
// import { fetchMenuItems } from '../../store/menuItems';
import cloud from '../../assets/cloud.jpeg'
import Navigation from '../MainNavigation/navigation';

import './menu.css';

const MenuComponent = () => {
  const { id: restaurantId } = useParams();
  const dispatch = useDispatch();
  const restaurant = useSelector(state => state.restaurants[restaurantId]);
  const menuItems = useSelector(state => state.menuItems);

  useEffect(() => {
    dispatch(fetchRestaurant(restaurantId));
  }, [dispatch, restaurantId]);

  if (!restaurant || !menuItems) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <>
  <Navigation />
  <div class="container">
    <div class="restaurant-header">
      <img src={cloud} class="restaurant-image"/>
      <div class="restaurant-details">
        <h1 class="restaurant-name">{restaurant.name}</h1>
        <p class="restaurant-location">{restaurant.address}</p>
        <div class="restaurant-ratings">
          <p class="rating-stars">{restaurant.rating}</p>
        </div>
      </div>
  </div>
<div class="menu-container">
  {Object.values(menuItems).map((menuItem) => (
    <div class="menu-item" key={menuItem.id}>
      <div class="menu-item-left">
        <div class="menu-item-name">
          <h4>{menuItem.itemName}</h4>
        </div>
        <div class="menu-item-description">
          <p>{menuItem.description}</p>
        </div>
      </div>
      <div class="menu-item-right">
        <div class="menu-item-image">
          <img src={menuItem.image_url} />
        </div>
        <div class="menu-item-price">
          <p>{menuItem.price}</p>
        </div>
      </div>
    </div>
  ))}
</div>
</div>
</>
  );
};

export default MenuComponent;
