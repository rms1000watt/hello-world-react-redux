import { 
    QUERY_GOOGLE,
    QUERY_YAHOO,
} from '../actions/';

const query = (state = {}, action) => {
  switch (action.type) {
    case QUERY_GOOGLE:
        return Object.assign({}, state, {
            google: action.res,
        })
    case QUERY_YAHOO:
        return Object.assign({}, state, {
            yahoo: action.res,
        })
    default:
      return state
  }
}

export default query