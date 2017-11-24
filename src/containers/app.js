import { connect } from 'react-redux';
import App from './../components/app';

const mapStateToProps = (state) => {

  const counter = Object
    .values(state.cart.selected)
    .reduce((acc, qty) => acc + qty);

  return {
    counter,
  }
}

export default connect(mapStateToProps)(App);
