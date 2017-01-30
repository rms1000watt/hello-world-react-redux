import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import query from './query';
import user from './user';

export default combineReducers({
  routing,
  user,
  query,
})

