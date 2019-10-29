import { GET_USERS, GET_USER, DELETE_USER } from './types';
import axios from 'axios';

export const getUser = (first_name , last_name) => {
  return {
    type: GET_USER,
    first_name,
    last_name
  };
};

export const getUsers = () => {
  return (dispatch) => {

    axios.get(`http://localhost:3000/api/users`)
    .then(res => {
      const users = res.data;
      dispatch({
        type: GET_USERS,
        users
      })
    })

  }
}

export const deleteUser = (userId) => {
  return (dispatch) => {
  axios.delete(`http://localhost:3000/api/users/${userId}`)
    .then(res => {
      console.log(res);
      dispatch({
        type: DELETE_USER,
        userId
      })
    })
  }
}