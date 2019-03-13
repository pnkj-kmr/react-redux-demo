import { combineReducers } from 'redux';
import postsReducer from './PostsReducer';

/**
 * Main Application Reducer
 * add all relevant reducers here
 */
export default combineReducers({
  postsData: postsReducer
});
