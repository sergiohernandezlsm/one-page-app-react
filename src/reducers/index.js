import { combineReducers } from 'redux';
import { GET_USERS, DELETE_USER } from '../actions/types';

const initialState = {
  users: []
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
      }
    default:
      return state
  }
}

const reducers = combineReducers({
  user
});

export default reducers;
