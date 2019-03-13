import { createStore, applyMiddleware } from 'redux';
// import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
/**
 * Importing all type of reducer of application
 */
import appReducer from '../reducers/AppReducer';

const initialState = {};

const middleware = [thunk];
 
const store = createStore(
  appReducer,
  initialState,
  applyMiddleware(...middleware),
  // compose(
  //   applyMiddleware(...middleware),
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // ),
);

export default store;
