import _products from './../../utils/products';

import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SEND_CART,
  SEND_CART_SUCCESS,
  SEND_CART_ERROR,
} from './../../actions';

const cartProducts = _products
  .map(p => ({
    ...p,
    quantity: 1,
  }))
  .slice(0, 2)

const initialState = {
  products: cartProducts.reduce((acc, product) => {
    acc[product.id] = product.quantity;
    return acc;
  }, {}),

  isSaving: false,

  error: null,
};

const products = (state = initialState.products, action) => {

  switch (action.type) {

    case SEND_CART_SUCCESS:
      return {};

    case ADD_TO_CART: {
      const id = action.payload.id;
      return {
        ...state,
        [id]: (state[id] || 0) + 1,
      }
    }

    case REMOVE_FROM_CART: {
      const id = action.payload.id;
      const qty = state[id] - 1;

      if (qty === 0) {
        const newState = { ...state };
        delete newState[id];
        return newState
      }

      return {
        ...state,
        [id]: qty,
      }
    }

    default:
      return state;
  }
}

const handleSave = (state = initialState.isSaving, action) => {
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


export default (state = initialState, action) => ({
  products: products(state.products, action),
  isSaving: handleSave(state.isSaving, action),
  error: action.error ? action.error.message : null,
});
