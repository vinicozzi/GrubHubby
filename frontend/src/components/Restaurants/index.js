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
    <div>
      <h2>{name}</h2>
      <p>{address}</p>
      <h3>Menu</h3>
      {menuItems.length > 0 ? (
        <ul>
          {menuItems.map((menuItem) => (
            <li key={menuItem.id}>
              <h4>{menuItem.item_name}</h4>
              <p>Price: {menuItem.item_price}</p>
              <p>Description: {menuItem.description}</p>
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
