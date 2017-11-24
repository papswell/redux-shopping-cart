import { connect } from 'react-redux';
import Cart from './../components/cart';

const mapStateToProps = (state) => {

  const selectedIds = Object.keys(state.cart.selectedProducts); // [1a]

  const products = state.products.list // [{id: 1a, ...}, {id: 1b, ...}, ...]
    .filter(product => selectedIds.includes(product.id)) // [{id: 1a, ...}]
    .map(product => ({
      ...product,
      quantity: state.cart.selectedProducts[product.id],
    }));

  const amount = products.reduce((oldTotal, product) => {
    const totalForProduct = product.price * product.quantity;
    return oldTotal + totalForProduct;
  }, 0);

  return {
    products,
    amount,
  };
}

export default connect(mapStateToProps)(Cart);
