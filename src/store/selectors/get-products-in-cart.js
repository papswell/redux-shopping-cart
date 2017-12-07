import { createSelector } from 'reselect';
import getProducts from './get-products';

export const getCartproducts = state => state.cart.get('products');

export default createSelector([
  getProducts,
  getCartproducts,
], (products, cartProducts) => {
  const selected = cartProducts.keySeq();

  return products
    .filter(product => selected.includes(product.get('id')))
    .map(p => p.set('quantity', cartProducts.get(p.get('id'))));
});
