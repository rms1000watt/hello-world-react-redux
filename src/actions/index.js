export const CHANGE_FIRST_NAME = 'CHANGE_FIRST_NAME';
export const CHANGE_LAST_NAME = 'CHANGE_LAST_NAME';
export const CHANGE_AGE = 'CHANGE_AGE';
export const BIRTHDAY_TODAY = 'BIRTHDAY_TODAY';

export const changeFirstName = (firstName) => {
  return {
    type: CHANGE_FIRST_NAME,
    firstName
  }
}

export const changeLastName = (lastName) => {
  return {
    type: CHANGE_LAST_NAME,
    lastName
  }
}

export const changeAge = (age) => {
  return {
    type: CHANGE_AGE,
    age
  }
}

export const birthdayToday = () => {
  return {
    type: BIRTHDAY_TODAY,
  }
}

export const QUERY_GOOGLE = 'QUERY_GOOGLE';
export const QUERY_YAHOO = 'QUERY_YAHOO';

const queryGoogleAction = (res) => {
  return {
    type: QUERY_GOOGLE,
    res,
  }
}

const queryYahooAction = (res) => {
  return {
    type: QUERY_YAHOO,
    res,
  }
}

export const queryGoogle = () => {
  return function (dispatch) {
    // Dispatch "loading" action
    // TODO: Use a proper URL that lets no-cors
    var request = new Request("https://jsonplaceholder.typicode.com/posts/1", {mode: 'no-cors'});
    return fetch(request)
    .then((response) => {
      // Dispatch "parsing" action again
      
      // TODO: Fix this.. empty body is not letting json unmarshaling
      return response.json();
    })
    .then((result) => {dispatch(queryGoogleAction(result))})
    .catch((err) => {console.log(err)})
  }
}

export const queryYahoo = () => {
  return {
    type: QUERY_YAHOO,
  }
}

