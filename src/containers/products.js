import { connect } from 'react-redux';

import ProductList from './../components/product-list';

const mapStateToProps = (state) => ({
  products: state.products.list,
});

export default connect(mapStateToProps)(ProductList);
