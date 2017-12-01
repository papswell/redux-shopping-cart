import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import productsReducer from './reducers/products';
import cart from './reducers/cart';

const middlewares = [];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers({
  products: productsReducer,
  cart,
}), composeEnhancers(applyMiddleware(...middlewares)));

export default store;
