import _products from './../../utils/products';

const initialState = {
  /**
   * List of all products
   */
  list: _products,
};

export default (state = initialState, action) => state;
