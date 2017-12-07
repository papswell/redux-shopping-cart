export default state => Object.values(state.cart.products).reduce((acc, qty) => acc + qty, 0);
