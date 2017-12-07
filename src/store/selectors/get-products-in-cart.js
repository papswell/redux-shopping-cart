export default state => {

  const selected = Object.keys(state.cart.products);

  return state.products.list
    .filter(product => selected.includes(product.id))
    .map(p => ({
      ...p,
      quantity: state.cart.products[p.id],
    }));
}
