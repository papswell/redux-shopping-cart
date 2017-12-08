import { createSelector } from 'reselect';

import getProducts from './get-products';

const getCart = state => state.cart.products;

export default createSelector([getProducts, getCart], (products, cart) => {

  const selected = Object.keys(cart);

  return products
    .filter(product => selected.includes(product.id))
    .map(p => ({
      ...p,
      quantity: cart[p.id],
    }));
});
