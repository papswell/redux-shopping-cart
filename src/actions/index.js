export const REMOVE_FROM_CART = ' REMOVE_FROM_CART';

export const GET_DATA = 'GET_DATA';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_ERROR = 'GET_DATA_ERROR';

// Action type
export const ADD_TO_CART = 'ADD_TO_CART';

// Action creator
export const addToCart = (id) => {

  // Action
  const action = {
    type: ADD_TO_CART,
    payload: { id },
  };
  return action;
};

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: { id },
});
