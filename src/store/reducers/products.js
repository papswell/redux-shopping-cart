import { List, Map, fromJS } from 'immutable';
import createReducer from './create-reducer';
import { categories } from './../../utils/products';

import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  FETCH_INITIAL_DATA,
  FETCH_INITIAL_DATA_SUCCESS,
  FETCH_INITIAL_DATA_ERROR,
} from './../../actions';

const initialState = Map({
  categories,
  list: List(),
  isLoading: false,
});

const handlers = {};

handlers[FETCH_INITIAL_DATA] = (state, action) => state.set('isLoading', true);

handlers[FETCH_INITIAL_DATA_SUCCESS] = (state, action) => state
  .set('isLoading', false)
  .set('list', fromJS(action.payload.products).map(p => p.set('initialStock', p.get('stock'))));

handlers[FETCH_INITIAL_DATA_ERROR] = (state, action) => state
  .set('isLoading', false);

handlers[ADD_TO_CART] = (state, action) => state.update('list',
  (list) => list.map(product => {
    if (product.get('id') === action.payload.id) {
      return product.set('stock', product.get('stock') - 1)
    }
    return product;
  }));

handlers[REMOVE_FROM_CART] = (state, action) => state.update('list',
  (list) => list.map(product => {
    if (product.get('id') === action.payload.id) {
      return product.set('stock', product.get('stock') + 1)
    }
    return product;
  }));

export default createReducer(initialState, handlers);
