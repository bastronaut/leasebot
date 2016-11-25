import { combineReducers } from 'redux';
import {
  RECEIVE_MESSAGE
} from '../actions';

const rootReducer = combineReducers({
  messages
})


const messages = (state = {
    items: [1, 2, 3]
  }, action) => {
  switch (action.type) {
    case RECEIVE_MESSAGE:
      return {
        ...state,
        testy: true
      }
    default:
      return state;
  }
}

export default rootReducer;
