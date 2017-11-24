import products from './../../utils/products';
import { ADD_TO_CART } from './../../actions';

const cartProducts = products
  .slice(0, 2)
  .reduce((acc, product) => {
    acc[product.id] = 2;
    return acc
  }, {});

const initialState = {
  selectedProducts: cartProducts,
};

export default (state = initialState, action) => {

  if (action.type === ADD_TO_CART) {

    const id = action.payload.id;
    const currentQuantity = state.selectedProducts[id] || 0;

    // on augmente la quantité de 1
    return {
      ...state,
      selectedProducts: {
        ...state.selectedProducts,
        [id]: currentQuantity + 1,
      }
    }
  }

  return state;
}
