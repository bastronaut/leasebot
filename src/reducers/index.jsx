import {combineReducers} from 'redux';
import {GET_INTRODUCTION, GET_INTRODUCTION_PENDING,
	GET_INTRODUCTION_FULFILLED,	GET_INTRODUCTION_REJECTED,
	MESSAGE_SEND, MESSAGE_RECEIVED, MESSAGE_REJECTED} from '../actions';
import { introduction_reducer } from './introduction.jsx'
import { messages_reducer } from './messages.jsx'

const initial_state = {

	introduction: '',
	messages: [],
	inProgress: false,
	error: null,
	userid: ''
};





const rootReducer = combineReducers({
	introduction: introduction_reducer,
	messages: messages_reducer});

export default rootReducer;
