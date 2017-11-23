import _products from './../../utils/products';

import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
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
  }, {})
};

const products = (state = initialState.products, action) => {

  switch (action.type) {
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


export default (state = initialState, action) => ({
  products: products(state.products, action),
});
