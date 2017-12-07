export default (state, id) => {
  const products = state.products.get('list');
  const cartProducts = state.cart.get('products');

  const alreadySelectedQty = cartProducts.get(id);
  if (alreadySelectedQty >= products.find(p => p.get('id') === id).get('initialStock')) {
    return true;
  }
  return false;
}
