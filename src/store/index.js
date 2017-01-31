import { createStore, applyMiddleware } from 'redux'
import { logger } from '../middleware'
import rootReducer from '../reducers'
import thunk from 'redux-thunk';

export default function configure(initialState) {
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore ;

  const createStoreWithMiddleware = applyMiddleware(
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