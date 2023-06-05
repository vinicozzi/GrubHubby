import csrfFetch from './csrf';

const RECEIVE_MENU_ITEMS = 'menuItems/receiveMenuItems';
const RECEIVE_MENU_ITEM = 'menuItems/receiveMenuItem';

// const CLEAR_MENU_ITEMS = 'menuItems/clearMenuItems';

// const clearMenuItems = () => ({
//     type: CLEAR_MENU_ITEMS
// });

const receiveMenuItems = (menuItems) => ({
  type: RECEIVE_MENU_ITEMS,
  menuItems
});

const receiveMenuItem = (menuItem) => ({
  type: RECEIVE_MENU_ITEM,
  menuItem
});

export const getMenuItems = state => {
  return Object.values(state.menuItems);
};

export const fetchMenuItems = (restaurantId) => async (dispatch) => {
  const response = await csrfFetch(`/api/restaurants/${restaurantId}`);
  const menuItems = await response.json();
  dispatch(receiveMenuItems(menuItems));
  return response;
};

export const fetchMenuItem = (restaurantId) => async (dispatch) => {
  const response = await csrfFetch(`/api/restaurants/${restaurantId}`);
  const menuItem = await response.json();
  dispatch(receiveMenuItem(menuItem));
  return response;
};

// const menuItemsReducer = (state = {}, action) => {
//   switch (action.type) {
//     case RECEIVE_MENU_ITEMS:
//       return { ...state, ...action.menuItems };
//     case RECEIVE_MENU_ITEM:
//       return { ...state, [action.menuItem.id]: action.menuItem };
//     default:
//       return state;
//   }
// };

const menuItemsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'restaurants/receiveRestaurant': {
      const { menuItems } = action;
      return {
        ...state,
        ...menuItems
      };
    }

    case 'restaurants/receiveRestaurants': {
        return {};
    }
    default:
      return state;
  }
};

export default menuItemsReducer;
