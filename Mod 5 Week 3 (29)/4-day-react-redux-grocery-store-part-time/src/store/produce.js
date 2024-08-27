import produceData from '../mockData/produce.json'

const POPULATE = 'produce/POPULATE';
const TOGGLE_LIKE = 'produce/toggleLike';

export const populateProduce = () => {
  return {
    type: POPULATE,
    produce: produceData//why didnt just putting produceData work?
  }
}

export const toggleLike = (produce) => {
  return {
    type: TOGGLE_LIKE,
    produce
  }
}

const produceReducer = (state = {}, action) => {
  switch(action.type) {
    case POPULATE: {
      const newState = {};
      action.produce.forEach(produce => {
        newState[produce.id] = produce;
      });
      return newState;
    }
    case TOGGLE_LIKE: {
      // const newState = {...state};
      // action.produce.liked = produce.liked ? false : true;
      // newState[produce.id] = {...action.produce}
      // return newState
      const { produce } = action;
      const newState = {...state}
      produce.liked = produce.liked ? false : true;
      newState[produce.id] = {...produce}
      return newState;
    }
    default:
      return state;
  }
}

export default produceReducer;
