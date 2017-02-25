import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_WEATHER:
    //Do not push to state because it will change the state, instead return a new array.
    return [action.payload.data, ...state]; //ES6 syntax, concat to state array
  }
  return state;
}
