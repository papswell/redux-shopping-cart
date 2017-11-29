import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  addToCart,
  removeFromCart,
  sendCart,
} from './../actions';
import isStockLimitReached from './../store/selectors/is-stock-limit-reached';
import Cart from './../components/cart';

const mapStateToProps = (state) => {

  const selected = Object.keys(state.cart.products);

  const products = state.products.list
    .filter(product => selected.includes(product.id))
    .map(p => ({
      ...p,
      quantity: state.cart.products[p.id],
      isAddDisabled: isStockLimitReached(state, p.id),
    }));

  const amount = products.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  return ({
    amount,
    products,
    isSaving: state.cart.isSaving,
  })
};

const mapDispatchToProps = (dispatch) => ({
  addToCart: bindActionCreators(addToCart, dispatch),
  removeFromCart: bindActionCreators(removeFromCart, dispatch),
  save: bindActionCreators(sendCart, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
