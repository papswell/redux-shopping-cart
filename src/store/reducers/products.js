import products from './../../utils/products';

const initialState = {
  /**
   * List of all products
   */
  list: products,
};

export default (state = initialState, action) => state;
