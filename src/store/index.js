import { createStore, combineReducers } from 'redux';
import products from './reducers/products';

const store = createStore(combineReducers({
  products,
}),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
