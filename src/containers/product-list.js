import { connect } from 'react-redux';
import ProductList from './../components/product-list';
import { addToCart as actionAddToCart } from './../actions';

const mapStateToProps = (state) => {
  return {
    products: state.products.list,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(actionAddToCart(id));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductList);
