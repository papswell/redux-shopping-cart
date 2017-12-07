export default state => state.cart
  .get('products')
  .reduce((acc, qty) => acc + qty, 0);
