import { REMOVE_FROM_CART } from './../../actions';

export default store => next => action => {

  const currentState = store.getState();

  if (action.type === REMOVE_FROM_CART) {
    const id = action.payload.id;
    const currentQty = currentState.cart.selected[id];

    if (currentQty === 0) {
      console.log('CANT REMOVE');
      return;
    }
  }

  next(action);
}
