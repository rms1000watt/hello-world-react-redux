import { 
    CHANGE_FIRST_NAME,
    CHANGE_LAST_NAME,
    CHANGE_AGE,
    BIRTHDAY_TODAY,
} from '../actions/';

const user = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_FIRST_NAME:
        return Object.assign({}, state, {
            firstName: action.firstName,
        })
    case CHANGE_LAST_NAME:
        return Object.assign({}, state, {
            lastName: action.lastName,
        })
    case CHANGE_AGE:
        return Object.assign({}, state, {
            age: action.age,
        })
    case BIRTHDAY_TODAY:
        return Object.assign({}, state, {
            age: parseInt(state.age, 10) + 1,
        })
    default:
      return state
  }
}

export default user