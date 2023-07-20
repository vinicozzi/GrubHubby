import csrfFetch from './csrf';
import { fetchMenuItems } from './menuItems';

const RECEIVE_RESTAURANTS = "restaurants/receiveRestaurants";
const RECEIVE_RESTAURANT = "restaurants/receiveRestaurant";
const RECEIVE_FILTERED_RESTAURANTS = 'restaurants/receiveFilteredRestaurants';
const RECEIVE_SEARCHED_RESTAURANT = 'restaurants/receiveSearchedRestaurant';

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

const receiveSearchedRestaurant = (restaurant) => ({
  type: RECEIVE_SEARCHED_RESTAURANT,
  restaurant
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
  const restaurants = await res.json();
  dispatch(receiveFilteredRestaurants(restaurants, category));
  return res;
};

export const fetchSearchedRestaurant = (restaurantId) => async (dispatch) => {
  const res = await csrfFetch(`/api/restaurants/${restaurantId}`);
  const restaurant  = await res.json();
  dispatch(receiveSearchedRestaurant(restaurant));
  return res;
}

const initialState = {
  allRestaurants: [],
  filteredRestaurants: [],
  searchedRestaurant: [],
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
    case RECEIVE_SEARCHED_RESTAURANT:
      return { ...state, searchedRestaurant: action.restaurant};
    default:
      return state;
  }
};

export default restaurantsReducer;
