import * as api from './../utils/api';

export const FILTER_CHANGE = 'FILTER_CHANGE';

export const filterChange = () => ({ type: FILTER_CHANGE })

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const FETCH_INITIAL_DATA = 'FETCH_INITIAL_DATA';
export const FETCH_INITIAL_DATA_SUCCESS = 'FETCH_INITIAL_DATA_SUCCESS';
export const FETCH_INITIAL_DATA_ERROR = 'FETCH_INITIAL_DATA_ERROR';

export const SEND_CART = 'SEND_CART';
export const SEND_CART_SUCCESS = 'SEND_CART_SUCCESS';
export const SEND_CART_ERROR = 'SEND_CART_ERROR';

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
      console.log('E', e);
      dispatch({
        type: FETCH_INITIAL_DATA_ERROR,
      });
    })
};

export const sendCart = () => (dispatch) => {
  dispatch({
    type: SEND_CART,
  });

  api.sendCart()
    .then(() => {
      dispatch({
        type: SEND_CART_SUCCESS,
      });
    })
    .catch(e => {
      dispatch({
        type: SEND_CART_ERROR,
        error: e,
      });
    })
};
