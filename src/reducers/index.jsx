import { combineReducers } from 'redux';
import {
  RECEIVE_MESSAGE
} from '../actions';

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

const messagesx = (state = {
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

const test = (state = {} , action) => {
  return state;
}

const testx = (state = {} , action) => {
  return state;
}

const rootReducer = combineReducers({
  test, testx
})


export default rootReducer;
