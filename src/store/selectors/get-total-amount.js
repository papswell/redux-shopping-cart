import getProductsInCart from './get-products-in-cart';

export default state => getProductsInCart(state)
  .reduce((acc, product) => {
    return acc + product.get('price') * product.get('quantity');
  }, 0);
