import { createSelector } from 'reselect';

const getProducts = state => state.products.get('list');

export default getProducts;

export const getProductsByCategory = (state, props) => getProducts(state)
  .filter(p => p.get('category') === props.category);

export const createGetProductsByCategory = () => createSelector(
  getProductsByCategory,
  (products) => {
    return products;
  }
)
