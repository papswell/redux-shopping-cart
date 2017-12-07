import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import App from './../components/app';

import getTotalItemCount from './../store/selectors/get-total-item-count';
import getError from './../store/selectors/get-error';
import getCategories from './../store/selectors/get-categories';

import toJS from './../utils/to-js';

import {
  fetchInitialData,
} from './../actions';

const mapStateToProps = (state) => ({
  itemCount: getTotalItemCount(state),
  error: getError(state),
  categories: getCategories(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchInitialData,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(toJS(App));
