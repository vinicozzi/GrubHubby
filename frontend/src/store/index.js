import {createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import sessionReducer from './session'
import restaurantsReducer from './restaurants';
import menuItemsReducer from './menuItems';
import modalReducer from './menuItemModal';
import cartReducer from './cart';

const rootReducer = combineReducers({
        session: sessionReducer,
        restaurants: restaurantsReducer,
        menuItems: menuItemsReducer,
        modal: modalReducer,
        cart: cartReducer
})

let enhancer; 

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default; 
    const composeEnhancers = 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState = {}) => {

    return createStore(rootReducer, preloadedState, enhancer)

}

export default configureStore;