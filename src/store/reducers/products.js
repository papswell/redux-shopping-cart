import {
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_ERROR,
} from './../../actions'

const initialState = {
  list: [],
  isLoading: false,
};

export default (state = initialState, action) => {

  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        isLoading: true,
      }

    case GET_DATA_SUCCESS:
      return {
        isLoading: false,
        list: action.payload.products,
      }

    case GET_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
      }

    default:

  }
  return state;
}
