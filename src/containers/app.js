import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import App from './../components/app';

import getTotalItemCount from './../store/selectors/get-total-item-count';
import getError from './../store/selectors/get-error';

import {
  filterChange,
  fetchInitialData,
} from './../actions';

const mapStateToProps = (state) => ({
  isChecked: state.products.filterInStock,
  itemCount: getTotalItemCount(state),
  error: getError(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchInitialData,
  filterChange,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
