import { createSelector } from 'reselect';

import { getCartproducts } from './get-products-in-cart';

export default createSelector(getCartproducts, (products) => {
  return products.reduce((acc, qty) => acc + qty, 0);
});
