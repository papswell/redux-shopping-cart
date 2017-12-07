import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import App from './../components/app';

import getTotalItemCount from './../store/selectors/get-total-item-count';
import getError from './../store/selectors/get-error';

import {
  fetchInitialData,
} from './../actions';

const mapStateToProps = (state) => ({
  itemCount: getTotalItemCount(state),
  error: getError(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchInitialData,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
