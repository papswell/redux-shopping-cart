import _products from './../../utils/products';
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from './../../actions';


const tShirtId = _products[0].id; // '1a'

const initialSelection = {};
initialSelection[tShirtId] = 1;

const initialState = {
  selected: initialSelection,
};

export default (state = initialState, action) => {

  switch (action.type) {
    case ADD_TO_CART: {
      const id = action.payload.id;

      return {
        ...state,
        selected: {
          ...state.selected,
          [id]: (state.selected[id] || 0) + 1,
        }
      }
      break;
    }

    case REMOVE_FROM_CART: {
      const id = action.payload.id;

      return {
        ...state,
        selected: {
          ...state.selected,
          [id]: state.selected[id] - 1,
        }
      }
      break;
    }

    default:

  }
  return state;
}
