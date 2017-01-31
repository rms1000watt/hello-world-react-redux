import { 
    QUERY_LOCALHOST,
    QUERY_ERROR,
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
    default:
      return state
  }
}

export default query