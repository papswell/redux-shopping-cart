import { ADD_TO_CART } from './../../actions';

import isStockLimitReached from './../selectors/is-stock-limit-reached';

export default store => next => action => {
  if (action.type === ADD_TO_CART) {
    if (isStockLimitReached(store.getState(), action.payload.id)) {
      return;
    }
  }
  next(action);
}
