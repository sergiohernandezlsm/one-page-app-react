import * as UserActionTypes from './types/user';

export const getUser = (first_name , last_name) => {
  return {
    type: UserActionTypes.GET_USER,
    first_name,
    last_name
  };
};