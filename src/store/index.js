import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { logger } from '../middleware';
import rootReducer from '../reducers';

export default function configure(initialState, history) {
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore;

  const createStoreWithMiddleware = applyMiddleware(
    routerMiddleware(history),
    logger,
    thunk
  )(create)

  const store = createStoreWithMiddleware(rootReducer, initialState)

  return store
}

export const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 0,
  id: 0,
}

export const query = {
  localhost: '',
  error: '',
  isLoading: false,
  isParsing: false,
}

export const initState = {
  user,
  query,
};
