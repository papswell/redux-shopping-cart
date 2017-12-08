import { createSelector } from 'reselect';
import getProductsInCart from './get-products-in-cart';

export default createSelector(
  getProductsInCart,
  (products) => {
    return products.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);
  }
);
