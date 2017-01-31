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

export const QUERY_LOCALHOST = 'QUERY_LOCALHOST';
export const QUERY_ERROR = 'QUERY_ERROR';

const _queryLocalhost = (localhost) => {
  return {
    type: QUERY_LOCALHOST,
    localhost,
  }
}

const _queryError = (error) => {
  return {
    type: QUERY_ERROR,
    error,
  }
}

export const queryLocalhost = () => {
  return function (dispatch) {
    // TODO: Dispatch "loading" action
    var request = new Request("http://localhost:3000/");
    // var request = new Request("http://google.com/");
    return fetch(request)
    .then((response) => {
      // TODO: Dispatch "parsing" action
      return response.text();
    })
    .then((result) => {dispatch(_queryLocalhost(result))})
    .catch((error) => {dispatch(_queryError(error.message))})
  }
}
