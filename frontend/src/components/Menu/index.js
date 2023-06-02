import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRestaurant } from '../../store/restaurants';
import { fetchMenuItems } from '../../store/menuItems';
import './menu.css';

const MenuComponent = () => {
  const { id: restaurantId } = useParams();
  const dispatch = useDispatch();
  const restaurant = useSelector(state => state.restaurants[restaurantId]);
  const menuItems = useSelector(state => state.menuItems);

  useEffect(() => {
    dispatch(fetchRestaurant(restaurantId));
  }, [dispatch, restaurantId]);

  // useEffect(() => {
  //   if (restaurant) {
  //     dispatch(fetchMenuItems(restaurant.menuId, restaurantId));
  //   }
  // }, [dispatch, restaurantId]);

  if (!restaurant || !menuItems) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="menu-container">
      <div className="restaurant-details">
        <h2 className="restaurant-name">{restaurant.name}</h2>
        <p className="restaurant-address">{restaurant.address}</p>
        <p className="restaurant-description">{restaurant.description}</p>
      </div>
      <h3>Menu Items:</h3>
      <ul className="menu-items">
        {Object.values(menuItems).map(menuItem => (
          <li key={menuItem.id} className="menu-item">
            <h4 className="menu-item-name">{menuItem.itemName}</h4>
            <p className="menu-item-price">Price: {menuItem.itemPrice}</p>
            <p className="menu-item-description">{menuItem.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuComponent;
