import { fromJS, Map, List } from 'immutable';

import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SEND_CART,
  SEND_CART_SUCCESS,
  SEND_CART_ERROR,
} from './../../actions';

const initialState = Map({
  products: Map(),
  isLoading: false,
  error: null,
});

const products = (state = initialState.get('products'), action) => {

  switch (action.type) {

    case SEND_CART_SUCCESS:
      return Map();

    case ADD_TO_CART: {
      const id = action.payload.id;
      return state.update(id, (value = 0) => value + 1);
    }

    case REMOVE_FROM_CART: {
      const id = action.payload.id;
      const qty = state.get(id) - 1;

      return (qty === 0) ?
        state.delete(id) :
        state.set(id, qty);
    }

    default:
      return state;
  }
}

const handleSave = (state = initialState.get('isLoading'), action) => {
  switch (action.type) {
    case SEND_CART:
      return true;

    case SEND_CART_SUCCESS:
    case SEND_CART_ERROR:
      return false;

    default:
      return state;
  }
}


export default (state = initialState, action) => Map({
  products: products(state.get('products'), action),
  isLoading: handleSave(state.get('isLoading'), action),
  error: action.error ? action.error.message : null,
});
