import * as UserActionTypes from '../actions/index';

const initialState = [
  {
    "id": 1,
    "first_name": "sergio",
    "last_name": "surf"
  },
  {
    "id": 2,
    "first_name": "karla",
    "last_name": "surfergirl"
  },
  {
    "id": 3,
    "first_name": "John John Florence",
    "last_name": "Pyzel"
  }
];

export default function User(state=initialState, action) {
  switch(action.type){
    case UserActionTypes:
      return [
        ...state,
        {
          first_name: action.first_name,
          last_name: action.last_name
        }
      ];
    default:
      return state
  }
}