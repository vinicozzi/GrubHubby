import csrfFetch from './csrf';

const RECEIVE_MENU = "menus/receiveMenu";

const receiveMenu = (menu) => ({
  type: RECEIVE_MENU,
  menu
});

export const getMenu = (state) => {
  return Object.values(state.menu);
};

export const fetchMenu = (restaurantId) => async (dispatch) => {
  const response = await csrfFetch(`/api/restaurants/${restaurantId}/menus`);
  debugger 
  const menu = await response.json();
  debugger
  dispatch(receiveMenu(menu));
  return response;
};

const menuReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_MENU:
      return { ...state, [action.menu.id]: action.menu };
    default:
      return state;
  }
};

export default menuReducer;