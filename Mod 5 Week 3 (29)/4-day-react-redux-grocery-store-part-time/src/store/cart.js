const ADD_TO_CART = 'cart/addToCart';

export const addToCart = (produceId) => ({
  type: ADD_TO_CART,
  produceId
})

const cartReducer = (state = {}, action) => {
  switch(action.type) {
    case ADD_TO_CART:
      return { ...state, [action.produceId]: {
        id: action.produceId,
        count: 1
      }
    }
    default:
      return state;
  }
}

export default cartReducer;
