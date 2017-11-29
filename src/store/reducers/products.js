import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  FETCH_INITIAL_DATA,
  FETCH_INITIAL_DATA_SUCCESS,
  FETCH_INITIAL_DATA_ERROR,
} from './../../actions';

const initialState = {
  /**
   * List of all products
   */
  list: [],

  isLoading: false,
};

// reducer that update the list part
const list = (state = initialState.list, action) => {

  switch (action.type) {

    case FETCH_INITIAL_DATA_SUCCESS:
      return state.concat(action.payload.products);

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

const loading = (state = initialState.isLoading, action) => {

  switch (action.type) {

    case FETCH_INITIAL_DATA:
      return true;

    case FETCH_INITIAL_DATA_SUCCESS:
    case FETCH_INITIAL_DATA_ERROR:
      return false;

    default:
      return state;

  }
}

export default (state = initialState, action) => ({
  list: list(state.list, action),
  isLoading: loading(state.isLoading, action),
});
