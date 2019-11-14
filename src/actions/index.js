import { GET_USERS, GET_USER, DELETE_USER, CREATE_USER, EDIT_USER, UPDATE_USER } from './types';
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
      dispatch({
        type: DELETE_USER,
        userId
      })
    })
  }
}

export const createUser = (user) => {
  return (dispatch) => {
    axios.post(`http://localhost:3000/api/users`, user)
    .then(res => {
      dispatch({
        type: CREATE_USER,
        user: res.data
      })
    })
  }
}

export const editUser = (user) => {
  return {
    user,
    type: EDIT_USER
  };
}

export const updateUser = (user) => {
  return (dispatch) => {
    axios.put(`http://localhost:3000/api/users/${user.id}`, user)
    .then(res => {
      dispatch({
        type: UPDATE_USER,
        user: res.data
      })
    })
  }
}
