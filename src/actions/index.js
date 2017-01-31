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
export const QUERY_LOADING = 'QUERY_LOADING';
export const QUERY_PARSING = 'QUERY_PARSING';

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

const _queryLoading = (isLoading) => {
  return {
    type: QUERY_LOADING,
    isLoading,
  }
}

const _queryParsing = (isParsing) => {
  return {
    type: QUERY_PARSING,
    isParsing,
  }
}

export const queryLocalhost = () => {
  return function (dispatch) {
    dispatch(_queryLoading(true))
    var request = new Request("http://localhost:3000/");
    // var request = new Request("http://google.com/");
    return fetch(request)
    .then((response) => {
      dispatch(_queryParsing(true))
      return response.text();
    })
    .then((result) => {
      dispatch(_queryLocalhost(result))
      dispatch(_queryLoading(false))
      dispatch(_queryParsing(false))
    })
    .catch((error) => {
      dispatch(_queryError(error.message))
      dispatch(_queryLoading(false))
      dispatch(_queryParsing(false))
    })
  }
}
