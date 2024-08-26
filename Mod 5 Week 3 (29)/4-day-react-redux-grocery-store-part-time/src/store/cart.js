const ADD_TO_CART = 'cart/addToCart';
const REMOVE_FROM_CART = 'cart/removeFromCart';
const UPDATE_CART = 'cart/updateCart';
const EMPTY_CART = 'cart/emptyCart';

export const addToCart = (produceId) => ({
  type: ADD_TO_CART,
  produceId
})

export const removeFromCart = (produceId) => ({
  type: REMOVE_FROM_CART,
  produceId
})

export const updateCart = (produceId, count) => ({
  type: UPDATE_CART,
  produceId,
  count
})

export const emptyCart = () => ({
  type: EMPTY_CART,
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
    case REMOVE_FROM_CART: {
      const newState = { ...state};
      delete newState[action.produceId]
      return newState;
    }
    case UPDATE_CART: {
      const newState = {...state};
      if (action.count < 1) {
        delete newState[action.produceId]
      } else {
        newState[action.produceId] = {id: action.produceId, count: action.count}
      }
      return newState
    }
    case EMPTY_CART: {
      return {}
    }
    default:
      return state;
  }
}

export default cartReducer;
