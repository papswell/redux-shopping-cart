import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  addToCart,
} from './../actions';

import getProductsWithFilter from './../store/selectors/get-products-with-filter';
import isLoading from './../store/selectors/is-loading';

import ProductList from './../components/product-list';

const isLoadingProducts = isLoading('products');

const mapStateToProps = (state, props) => {

  const categoryId = props.category;

  return {
    products: getProductsWithFilter(state)
      .filter(product => product.category === categoryId),
    isLoading: isLoadingProducts(state),
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addToCart,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
