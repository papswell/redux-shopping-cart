import { createStore, combineReducers } from 'redux';
import products from './reducers/products';
import cart from './reducers/cart';

const store = createStore(combineReducers({
  products: products,
  cart, // notation es6, raccourcie
}),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
