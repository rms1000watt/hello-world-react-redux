import {
  QUERY_LOCALHOST,
  QUERY_ERROR,
  QUERY_LOADING,
  QUERY_PARSING,
} from '../actions/';

const query = (state = {}, action) => {
  switch (action.type) {
    case QUERY_LOCALHOST:
      return Object.assign({}, state, {
        localhost: action.localhost,
      })
    case QUERY_ERROR:
      return Object.assign({}, state, {
        error: action.error,
      })
    case QUERY_LOADING:
      return Object.assign({}, state, {
        isLoading: action.isLoading,
      })
    case QUERY_PARSING:
      return Object.assign({}, state, {
        isParsing: action.isParsing,
      })
    default:
      return state
  }
}

export default query
