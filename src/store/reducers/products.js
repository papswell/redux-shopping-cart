import products from './../../utils/products';

import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from './../../actions';

const initialState = {
  /**
   * List of all products
   */
  list: products,
};

// reducer that update the list part
const list = (state = initialState.list, action) => {

  switch (action.type) {

    case ADD_TO_CART: {
      const id = action.payload.id;
      return state.map(product => {
        if (product.id === id) {
          return {
            ...product,
            quantity: product.quantity - 1,
          }
        }
        return product;
      });
    }

    case REMOVE_FROM_CART: {
      const id = action.payload.id;
      return state.map(product => {
        if (product.id === id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          }
        }
        return product;
      });
    }

    default:
      return state;
  }
}


export default (state = initialState, action) => ({
  list: list(state.list, action),
});
