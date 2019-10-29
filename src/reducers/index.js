import { combineReducers } from 'redux';
import { GET_USERS } from '../actions/types';

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
    default:
      return state
  }
}

const reducers = combineReducers({
  user
});

export default reducers;
