import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  addToCart,
} from './../actions';

import getProducts from './../store/selectors/get-products';
import isLoading from './../store/selectors/is-loading';

import ProductList from './../components/product-list';

const isLoadingProducts = isLoading('products');

const mapStateToProps = (state, props) => ({
  products: getProducts(state)
    .filter(p => p.get('category') === props.category)
    .toJS(),
  isLoading: isLoadingProducts(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addToCart,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
