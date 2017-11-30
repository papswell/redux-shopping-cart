import { connect } from 'react-redux';
import App from './../components/app';

import { getAllProducts } from './../utils/api';

import {
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_ERROR,
} from './../actions'

const mapStateToProps = (state) => {

  const counter = Object
    .values(state.cart.selected)
    .reduce((acc, qty) => acc + qty);

  return {
    counter,
    isLoading: state.products.isLoading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => {

      dispatch({
        type: GET_DATA,
      });

      getAllProducts()
        .then(products => {
          dispatch({
            type: GET_DATA_SUCCESS,
            payload: { products },
          })
        })
        .catch(e => {
          dispatch({ type: GET_DATA_ERROR })
        })
    }
  }
}


const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default ConnectedApp;
