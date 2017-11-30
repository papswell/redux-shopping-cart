export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = ' REMOVE_FROM_CART';

export const GET_DATA = 'GET_DATA';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_ERROR = 'GET_DATA_ERROR';


export const addToCart = (id) => ({
  type: ADD_TO_CART,
  payload: { id },
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: { id },
});
