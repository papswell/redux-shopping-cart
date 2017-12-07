import createReducer from './create-reducer';
import { categories } from './../../utils/products';

import {
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
};

const handlers = {};

handlers[FETCH_INITIAL_DATA] = (state, action) => ({
  ...state,
  isLoading: true,
});

handlers[FETCH_INITIAL_DATA_SUCCESS] = (state, action) => ({
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
