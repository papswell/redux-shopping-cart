import * as api from './../utils/api';

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const FETCH_INITIAL_DATA = 'FETCH_INITIAL_DATA';
export const FETCH_INITIAL_DATA_SUCCESS = 'FETCH_INITIAL_DATA_SUCCESS';
export const FETCH_INITIAL_DATA_ERROR = 'FETCH_INITIAL_DATA_ERROR';

export const addToCart = (id) => ({
  type: ADD_TO_CART,
  payload: { id },
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: { id },
});

export const fetchInitialData = () => (dispatch) => {
  dispatch({
    type: FETCH_INITIAL_DATA,
  });

  api.getAllProducts()
    .then(products => {
      dispatch({
        type: FETCH_INITIAL_DATA_SUCCESS,
        payload: { products },
      });
    })
    .catch(e => {
      dispatch({
        type: FETCH_INITIAL_DATA_ERROR,
      });
    })
};
