import getProducts from './get-products';

export default state => {

  const filter = state.products.filterInStock;

  if (!filter) return getProducts(state);

  // on choppe la liste compete
  return getProducts(state)
    .filter(product => product.stock > 0)
}
