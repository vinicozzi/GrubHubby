import csrfFetch from './csrf';
import { fetchMenuItems } from './menuItems';

const RECEIVE_RESTAURANTS = "restaurants/receiveRestaurants";
const RECEIVE_RESTAURANT = "restaurants/receiveRestaurant";
const RECEIVE_FILTERED_RESTAURANTS = 'restaurants/receiveFilteredRestaurants';

const receiveRestaurants = (restaurants, category) => ({
  type: RECEIVE_RESTAURANTS,
  restaurants,
  category
});

const receiveRestaurant = (restaurant, menuItems) => ({
  type: RECEIVE_RESTAURANT,
  restaurant,
  menuItems
});

const receiveFilteredRestaurants = (restaurants, category) => ({
  type: RECEIVE_FILTERED_RESTAURANTS,
  restaurants,
  category
})

export const getRestaurants = state => {
  return Object.values(state.restaurants.allRestaurants);
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

  // const allResponse = await csrfFetch('/api/restaurants');
  // const allRestaurants = await allResponse.json();
  // dispatch(receiveRestaurants(allRestaurants));

  return response;
};

export const fetchFilteredRestaurants = (category) => async (dispatch) => {
  const res = await csrfFetch(`/api/restaurants/category?category=${category}`);
  debugger 
  const restaurants = await res.json();
  debugger 
  dispatch(receiveFilteredRestaurants(restaurants, category));
  return res;
};

const initialState = {
  allRestaurants: [],
  filteredRestaurants: [],
  currentRestaurant: null,
  currentCategory: null
};

const restaurantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_RESTAURANTS:
      return { ...state, allRestaurants: action.restaurants };
    case RECEIVE_FILTERED_RESTAURANTS:
      return { ...state, filteredRestaurants: action.restaurants, currentCategory: action.category };
    case RECEIVE_RESTAURANT:
      const { restaurant, menuItems } = action;
      return { ...state, currentRestaurant: { ...restaurant, menuItems }, allRestaurants: state.allRestaurants };
    default:
      return state;
  }
};

export default restaurantsReducer;
