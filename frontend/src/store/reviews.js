// reviews.js (reviews reducer)

// Action Types
const FETCH_REVIEWS = 'FETCH_REVIEWS';
const ADD_REVIEW = 'ADD_REVIEW';

// Action Creators
export const fetchReviews = (reviews) => {
    return {
      type: FETCH_REVIEWS,
      payload: reviews,
    };
  };
  
  export const addReview = (review) => {
    return {
      type: ADD_REVIEW,
      payload: review,
    };
  };

// Initial State
const initialState = {
  reviews: [],
};

// Reducer
const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };
    case ADD_REVIEW:
      return {
        ...state,
        reviews: [...state.reviews, action.payload],
      };
    default:
      return state;
  }
};

export default reviewsReducer;
