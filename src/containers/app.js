import { connect } from 'react-redux';
import App from './../components/app';

export default connect((state) => ({
  itemCount: state.cart.list.length,
}))(App);
