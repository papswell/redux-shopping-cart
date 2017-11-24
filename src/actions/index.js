// LE type de l'action
export const ADD_TO_CART = 'ADD_TO_CART';

// UNe fonction qui crée les actions
export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    payload: {
      id: id,
    }
  }
}
