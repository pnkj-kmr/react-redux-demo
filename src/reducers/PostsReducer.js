import { FETCH_POSTS } from '../actions/types';

const initialState = {
  data: []
}

export default function(state = initialState, action) {
  // console.log('Reducer >>>>> action', action);
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        data: action.payload
      }
    default:
      return state;
  }
}
