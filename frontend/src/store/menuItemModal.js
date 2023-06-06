// action types
const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

// action creators
export const openModal = (menuItem) => {
    return {
      type: OPEN_MODAL,
      payload: menuItem,
    };
  };
  
  export const closeModal = () => {
    return {
      type: CLOSE_MODAL,
    };
  };
  

// initial state
const initialState = {
    showModal: false,
    selectedMenuItem: null,
  };
  
  // modal reducer
  const modalReducer = (state = initialState, action) => {
    switch (action.type) {
      case OPEN_MODAL:
        return {
          ...state,
          showModal: true,
          selectedMenuItem: action.payload,
        };
      case CLOSE_MODAL:
        return {
          ...state,
          showModal: false,
          selectedMenuItem: null,
        };
      default:
        return state;
    }
  };

  export default modalReducer; 