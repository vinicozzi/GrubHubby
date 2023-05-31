import csrfFetch from './csrf';

const RECEIVE_RESTAURANTS = "restaurants/receiveRestaurants";
const RECEIVE_RESTAURANT = "restaurants/receiveRestaurant";

const receiveRestaurants = (restaurants) => ({
  type: RECEIVE_RESTAURANTS,
  restaurants
});

const receiveRestaurant = (restaurant) => ({
  type: RECEIVE_RESTAURANT,
  restaurant
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
  const restaurant = await response.json();
  dispatch(receiveRestaurant(restaurant));
  return response;
};

const restaurantsReducer = (state = {}, action) => {
        switch (action.type) {
          case RECEIVE_RESTAURANTS:
            return { ...state, ...action.restaurants};
          case RECEIVE_RESTAURANT:
            return { [action.restaurant.restaurant.id]: action.restaurant.restaurant }
        default:
            return state;
        }
};


export default restaurantsReducer;
