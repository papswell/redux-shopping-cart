import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Cart from './../components/cart';

import {
  addToCart as actionAddToCart,
  removeFromCart,
} from './../actions';

const byID = selectedIds => (product) => selectedIds.includes(product.id);

const mapStateToProps = (state) => {

  const selectedIds = Object.keys(state.cart.selected); // ['1a']

  const products = state.products.list // [{ id: '1a', ...}, {id: '2b', ...}]
    .filter(byID(selectedIds)) // [{ id: '1a', ...}]
    .map((product) => {
      return {
        ...product,
        quantity: state.cart.selected[product.id],
      }
    });

  const amount = products
    .reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);

  return {
    products,
    amount,
  }
}

const mapDispatchToProps = (dispatch) => ({
  addToCart: bindActionCreators(actionAddToCart, dispatch),
  removeFromCart: bindActionCreators(removeFromCart, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
//
// const BadExample extends ReacT {
//
//   handleclick = (e)=> {
//     this.props.dispatch({
//       type: BUTTON_CLICK
//     })
//   }
//
//   render() {
//     <Button onCLick={this?handleclick} />
//   }
// }
