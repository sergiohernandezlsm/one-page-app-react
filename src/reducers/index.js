import { combineReducers } from 'redux';
import { GET_USERS, DELETE_USER, CREATE_USER, EDIT_USER, UPDATE_USER } from '../actions/types';

const initialState = {
  users: [],
  editable: null
};

const user = (state=initialState, action) => {
  switch(action.type){
    case GET_USERS:
      console.log(action)
      return {
        ...state,
        users: action.users
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter( user => action.userId !== user.id)
      };
    case CREATE_USER:
      return {
        ...state,
        users: state.users.concat(action.user)
      };
    case EDIT_USER:
      return {
        ...state,
        editable: action.user
      };
    case UPDATE_USER:
      console.log(action)
      return {
        ...state,
        editable: null,
        users: state.users.map( user => { 
          if(user.id !== action.user.id){
            return user;
          }
          return {
            ...action.user
          };    
         })
      };
    default:
      return state
  }
}

const reducers = combineReducers({ user });

export default reducers;
