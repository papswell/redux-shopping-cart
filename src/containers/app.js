import { connect } from 'react-redux';
import App from './../components/app';

import getTotalItemCount from './../store/selectors/get-total-item-count';
import getError from './../store/selectors/get-error';

export default connect((state) => ({
  itemCount: getTotalItemCount(state),
  error: getError(state),
}))(App);
