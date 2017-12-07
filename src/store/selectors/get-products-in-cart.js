export default state => {

  const selected = state.cart.get('products').keySeq();

  return state.products
    .get('list')
    .filter(product => selected.includes(product.get('id')))
    .map(p => p.set('quantity', state.cart
      .getIn(['products', p.get('id')])
    ));
}
