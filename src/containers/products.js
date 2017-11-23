import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addToCart } from './../actions';
import ProductList from './../components/product-list';

const mapStateToProps = (state) => ({
  products: state.products.list,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: bindActionCreators(addToCart, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
