import products from './../../utils/products';

const cartProducts = products
  .map(p => ({
    ...p,
    quantity: 1,
  }))
  .slice(0, 2)

const initialState = {
  list: cartProducts.map(p => p.id),
  quantity: cartProducts.map(p => p.id).reduce((acc, id) => {
    acc[id] = 1;
    return acc;
  }, {})
};

export default (state = initialState, action) => state;
