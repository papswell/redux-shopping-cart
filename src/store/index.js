import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import products from './reducers/products';
import cart from './reducers/cart';


import preventAddIfNeeded from './middlewares/prevent-add-if-needed';

const middlewares = [
  thunk,
  preventAddIfNeeded
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers({
  products,
  cart,
}), composeEnhancers(applyMiddleware(...middlewares)));

export default store;
