
const ADD_TO_CART = 'cart/addToCart';

export const addToCart = (produceId) => ({
  type: ADD_TO_CART,
  produceId
})

const cartReducer = (state = {}, action) => {
  switch(action.type) {
    case ADD_TO_CART:{
      const newState = { ...state };
      if (newState[action.produceId]) {
        newState[action.produceId].count += 1;
      } else {
        newState[action.produceId] = {
          id: action.produceId,
          count: 1
        }
        return newState;
      }}
    default:
      return state;
  }
}

export default cartReducer;
