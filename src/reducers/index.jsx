import {combineReducers} from 'redux';
import {GET_INTRODUCTION, GET_INTRODUCTION_PENDING,
	GET_INTRODUCTION_FULFILLED,	GET_INTRODUCTION_REJECTED,
	MESSAGE_SEND, MESSAGE_RECEIVED, MESSAGE_REJECTED} from '../actions';

const initial_state = {
	introduction: '',
	messages: [],
	inProgress: false,
	error: null,
	userid: ''
};

const action_type = "GET_INTRODUCTION";

export const introduction_reducer = (state = initial_state, action) => {
	switch (action.type) {
		case GET_INTRODUCTION_PENDING:
			return {
				...state,
				inProgress: true,
				error: false
			};
		case GET_INTRODUCTION_FULFILLED:
			return {
				...state,
				introduction: action.payload.introductiontext,
				userid: action.payload.userid,
				inProgress: false
			};
		case GET_INTRODUCTION_REJECTED:
			return {
				...state,
				inProgress: false,
				error: action.error
			};
		default:
			return state
	}
}


export const messages_reducer = (state = initial_state, action) => {
	switch (action.type) {
		case MESSAGE_SEND:
			return {
				...state,
				inProgress: true,
				error: false
			};
		case MESSAGE_RECEIVED:
			return {
				...state,
				introduction: action.payload.introductiontext,
				userid: action.payload.userid,
				inProgress: false
			};
		case MESSAGE_REJECTED:
			return {
				...state,
				inProgress: false,
				error: action.error
			};
		default:
			return state
	}
}
const rootReducer = combineReducers({introduction_reducer, messages_reducer})

export default rootReducer;
