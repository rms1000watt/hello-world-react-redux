import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import query from './query';
import user from './user';

export default combineReducers({
  user,
  query,
  router: routerReducer,
})
