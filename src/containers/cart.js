import { connect } from 'react-redux';

import Cart from './../components/cart';

const mapStateToProps = (state) => {
  const selected = state.cart.list;
  return ({
    products: state.products.list
      .filter(product => selected.includes(product.id))
      .map(p => ({
        ...p,
        quantity: state.cart.quantity[p.id],
      })),
  })
};

export default connect(mapStateToProps)(Cart);
