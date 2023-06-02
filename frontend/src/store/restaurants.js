import csrfFetch from './csrf';
import { fetchMenuItems } from './menuItems';

const RECEIVE_RESTAURANTS = "restaurants/receiveRestaurants";
const RECEIVE_RESTAURANT = "restaurants/receiveRestaurant";

const receiveRestaurants = (restaurants) => ({
  type: RECEIVE_RESTAURANTS,
  restaurants
});

const receiveRestaurant = (restaurant, menuItems) => ({
  type: RECEIVE_RESTAURANT,
  restaurant,
  menuItems
});

export const getRestaurants = state => {
  return Object.values(state.restaurants);
}

export const fetchRestaurants = () => async (dispatch) => {
  const response = await csrfFetch('/api/restaurants');
  const restaurants = await response.json();
  dispatch(receiveRestaurants(restaurants));
  return response;
};

export const fetchRestaurant = (restaurantId) => async (dispatch) => {
  const response = await csrfFetch(`/api/restaurants/${restaurantId}`);
  const { restaurant, menuItems } = await response.json();
  dispatch(receiveRestaurant(restaurant, menuItems));
  // dispatch(fetchMenuItems(restaurantId));
  return response;
};

const restaurantsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_RESTAURANTS:
      return { ...state, ...action.restaurants };
    case RECEIVE_RESTAURANT:
      const { restaurant } = action;
      let newState = {...state}
      newState[restaurant.id] = restaurant
      debugger 
      return newState;
    default:
      return state;
  }
};

export default restaurantsReducer;