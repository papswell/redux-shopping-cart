import { createStore, combineReducers } from 'redux';

import productsReducer from './reducers/products';
import cart from './reducers/cart';

const store = createStore(combineReducers({
  products: productsReducer,
  cart,
}),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
