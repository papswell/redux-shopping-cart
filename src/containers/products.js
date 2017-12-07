import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  addToCart,
  fetchInitialData,
} from './../actions';

import getProducts from './../store/selectors/get-products';
import isLoading from './../store/selectors/is-loading';

import ProductList from './../components/product-list';

const isLoadingProducts = isLoading('products');

const mapStateToProps = (state) => ({
  products: getProducts(state),
  isLoading: isLoadingProducts(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addToCart,
  fetch: fetchInitialData,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
