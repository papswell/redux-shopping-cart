import createReducer from './create-reducer';
import { categories } from './../../utils/products';

import {
  FILTER_CHANGE,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  FETCH_INITIAL_DATA,
  FETCH_INITIAL_DATA_SUCCESS,
  FETCH_INITIAL_DATA_ERROR,
} from './../../actions';

const initialState = {
  categories,
  list: [],
  isLoading: false,
  filterInStock: false,
};

const handlers = {};

handlers[FILTER_CHANGE] = (state) => ({
  ...state,
  filterInStock: !state.filterInStock,
});

handlers[FETCH_INITIAL_DATA] = (state, action) => ({
  ...state,
  isLoading: true,
});

handlers[FETCH_INITIAL_DATA_SUCCESS] = (state, action) => ({
  ...state,
  list: state.list.concat(action.payload.products.map(p => ({
    ...p,
    initialStock: p.stock,
  }))),
  isLoading: false,
});

handlers[FETCH_INITIAL_DATA_ERROR] = (state, action) => ({
  ...state,
  isLoading: true,
});

handlers[ADD_TO_CART] = (state, action) => ({
  ...state,
  list: state.list.map(product => {
    if (product.id === action.payload.id) {
      return {
        ...product,
        stock: product.stock - 1,
      }
    }
    return product;
  }),
});

handlers[REMOVE_FROM_CART] = (state, action) => ({
  ...state,
  list: state.list.map(product => {
    if (product.id === action.payload.id) {
      return {
        ...product,
        stock: product.stock + 1,
      }
    }
    return product;
  }),
});

export default createReducer(initialState, handlers);
