// http://redux.js.org/docs/advanced/AsyncActions.html

//
// actions:
// send_message
// received_message_response
// send_message_failed
//
// get_introduction
// received_introduction__response
// get_introduction_failed
//
// send_best_answer
import sampledata from '../utils/sampledata';
import API from '../utils/Api';

export const GET_INTRODUCTION = 'GET_INTRODUCTION';
export const GET_INTRODUCTION_PENDING = 'GET_INTRODUCTION_PENDING';
export const GET_INTRODUCTION_FULFILLED = 'GET_INTRODUCTION_FULFILLED';
export const GET_INTRODUCTION_REJECTED = 'GET_INTRODUCTION_REJECTED';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGE';

export const getIntroduction = param => {
	console.log('the sample data:');
	console.log(sampledata);
	const action_type = "GET_INTRODUCTION";
	return dispatch => {
		dispatch({type: `${action_type}_PENDING`});
		API.get('/introduction/').then(resp => {
			//Dispatch success
			dispatch({type: `${action_type}_FULLFILLED`, payload: resp.data.results});
		}).catch(err => {
			console.log('tehres an error:');
			console.log(err);
			dispatch({type: `${action_type}_FULLFILLED`, error: err});
		});
	};
}
