import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  addToCart,
} from './../actions';

import getProducts from './../store/selectors/get-products';
import isLoading from './../store/selectors/is-loading';

import ProductList from './../components/product-list';
import toJS from './../utils/to-js';

const isLoadingProducts = isLoading('products');

const mapStateToProps = (state, props) => ({
  products: getProducts(state)
    .filter(p => p.get('category') === props.category),
  isLoading: isLoadingProducts(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addToCart,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(toJS(ProductList));
