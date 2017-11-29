import { connect } from 'react-redux';
import App from './../components/app';

export default connect((state) => ({
  itemCount: Object.values(state.cart.products).reduce((acc, qty) => acc + qty, 0),
  error: state.cart.error,
}))(App);
