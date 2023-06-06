// cart.js

// Action Types
export const ADD_TO_CART = 'cart/addToCart';
export const REMOVE_FROM_CART = 'cart/removeFromCart';
export const CLEAR_CART = 'cart/clearCart';

// Action Creators
export const addToCart = (item) => ({
    type: ADD_TO_CART,
    payload: item,
  });

export const removeFromCart = (itemId) => ({
  type: REMOVE_FROM_CART,
  payload: itemId,
});

export const clearCart = () => ({
  type: CLEAR_CART
});

const initialState = {
  items: []
};

// Reducer Function
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload)
      };
    case CLEAR_CART:
      return {
        ...state,
        items: []
      };
    default:
      return state;
  }
};

export default cartReducer;
