import {combineReducers} from 'redux';
import {GET_INTRODUCTION, RECEIVE_MESSAGE} from '../actions';

// const messages = (state = {
//     items: [1, 2, 3]
//   }, action) => {
//   switch (action.type) {
//     case RECEIVE_MESSAGE:
//       return {
//         ...state,
//         testy: true
//       }
//     default:
//       return state;
//   }
// }
//
// const messagesx = (state = {
//     items: [1, 2, 3]
//   }, action) => {
//   switch (action.type) {
//     case RECEIVE_MESSAGE:
//       return {
//         ...state,
//         testy: true
//       }
//     default:
//       return state;
//   }
// }

const initial_state = {
	messages: [],
	inProgress: false,
	error: null
};

const action_type = "GET_INTRODUCTION";

export const messages_reducer = (state = initial_state, action) => {
	switch (action.type) {
		case `${action_type}_PENDING`:
			console.log('hi pending');
			return {
				...state,
				inProgress: true,
				error: false
			};
		case `${action_type}_FULFILLED`:
			return {
				...state,
				messages: action.payload,
				inProgress: false
			};
		case `${action_type}_REJECTED`:
			return {
				...state,
				inProgress: false,
				error: action.error
			};
		default:
			return state
	}
}

const test = (state = {}, action) => {
	return state;
}

const testx = (state = {}, action) => {
	return state;
}

const rootReducer = combineReducers({messages_reducer, testx})
// const rootReducer = combineReducers({test, testx})

export default rootReducer;
