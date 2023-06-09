import csrfFetch from "./csrf";
import { storeCSRFToken, restoreCSRF } from "./csrf";


const SET_CURRENT_USER = 'session/setCurrentUser';
const REMOVE_CURRENT_USER = 'session/removeCurrentUser';

// POJO action creators 
const setCurrentUser = (user) => ({
    type: SET_CURRENT_USER,
    payload: user
});

const removeCurrentUser = (user) => ({
    type: REMOVE_CURRENT_USER,
});

// session auth thunk action creators 

  const storeCurrentUser = user => {
    if (user) sessionStorage.setItem("currentUser", JSON.stringify(user));
    else sessionStorage.removeItem("currentUser");
  }

// thunk action 


  export const restoreSession = () => async dispatch => {

    const response = await csrfFetch("/api/session")
    storeCSRFToken(response)
    const data = await response.json();
    storeCurrentUser(data.user)
    dispatch(setCurrentUser(data.user))
    return response

  }

  export const signup = (user) => async (dispatch) => {
    const { firstName, lastName, address, email, phoneNumber, password } = user;
    
    try {
      const response = await csrfFetch("api/users", {
        method: "POST",
        body: JSON.stringify({ user }),
      });
  
      const data = await response.json();
  
      storeCurrentUser(data.user);
  
      dispatch(setCurrentUser(data.user));
  
      return response;
    } catch (error) {
      console.error("Error during signup:", error);
      throw error;
    }
  };
  
  export const login = ({ credential, password }) => async (dispatch) => {
  
  
    try {
      const response = await csrfFetch("/api/session", {
        method: "POST",
        body: JSON.stringify({ credential, password }),
      });
  
      const data = await response.json();
  
      storeCurrentUser(data.user);
  
      dispatch(setCurrentUser(data.user));
  
      return response;
    } catch (error) {
      console.error("Error during login:", error);
      throw error;
    }
  };

    export const logout = () => async (dispatch) => {
        const response = await csrfFetch("/api/session", {
            method: "DELETE"
        });
        storeCurrentUser(null);
        dispatch(removeCurrentUser());
        return response;
    };


  
// getters for initial state 

  const initialState = { 
    user: JSON.parse(sessionStorage.getItem("currentUser"))
  };

// reducer 
const sessionReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CURRENT_USER:
            return { ...state, user: action.payload }
        case REMOVE_CURRENT_USER:
            return { ...state, user: null}
        default:
            return state; 
    }
};

export default sessionReducer; 