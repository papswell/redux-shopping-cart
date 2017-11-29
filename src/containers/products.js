import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  addToCart,
  fetchInitialData,
} from './../actions';

import ProductList from './../components/product-list';

const mapStateToProps = (state) => ({
  products: state.products.list,
  isLoading: state.products.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: bindActionCreators(addToCart, dispatch),
  fetch: bindActionCreators(fetchInitialData, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
