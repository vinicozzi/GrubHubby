import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as restaurantActions from '../../store/restaurants';
import './menu.css';

const RestaurantMenu = () => {
  const dispatch = useDispatch();
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) => state.restaurants[restaurantId]);
  const menuItems = useSelector((state) => state.menuItems);

  useEffect(() => {
    dispatch(restaurantActions.fetchRestaurant(restaurantId));
  }, [dispatch, restaurantId]);

  if (!restaurant) {
    return <div>Loading...</div>;
  }

  const { name, address } = restaurant;

  return (
    <div className="restaurant-menu-container">
      <h1 className="restaurant-name">{name}</h1>
      <p className="restaurant-address">{address}</p>
      <h2 className="menu-title">Menu</h2>

      {menuItems.length > 0 ? (
        <ul className="menu-items">
          {menuItems.map((menuItem) => (
            <li key={menuItem.id} className="menu-item">
              <div className="menu-item-details">
                <h6 className="menu-item-name">{menuItem.item_name}</h6>
                <p className="menu-item-description">{menuItem.description}</p>
              </div>
              <div className="menu-item-image">
                <img src={menuItem.image} alt={menuItem.item_name} className="menu-item-image-img" />
              </div>
              <div className="menu-item-price">
                <span className="menu-item-price-amount">{menuItem.item_price}</span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No menu items available.</p>
      )}
    </div>
  );
};

export default RestaurantMenu;
