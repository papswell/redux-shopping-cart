import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  addToCart,
} from './../actions';

import { createGetProductsByCategory } from './../store/selectors/get-products';
import isLoading from './../store/selectors/is-loading';

import ProductList from './../components/product-list';
import toJS from './../utils/to-js';

const isLoadingProducts = isLoading('products');

const mapStateToProps = (state, props) => {

  const getProductsByCategory = createGetProductsByCategory();

  return (state, props) => ({
    products: getProductsByCategory(state, props),
    isLoading: isLoadingProducts(state),
  });
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addToCart,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(toJS(ProductList));
