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