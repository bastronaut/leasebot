import sampledata from '../utils/sampledata';
import API from '../utils/Api';

export const GET_INTRODUCTION = 'GET_INTRODUCTION';
export const getIntroduction = param => {
	return dispatch => {
		dispatch(introductionPending());
		API.get('/introduction/').then(response => {
			dispatch(introductionFulfilled(response)); //Dispatch success
		}).catch(err => {
			dispatch(GET_INTRODUCTION_REJECTED());
		});
	};
}


export const GET_INTRODUCTION_PENDING = 'GET_INTRODUCTION_PENDING';
const introductionPending = () => {
	return {
		type: GET_INTRODUCTION_PENDING,
		isPending: true
	}
}

export const GET_INTRODUCTION_FULFILLED = 'GET_INTRODUCTION_FULFILLED';
const introductionFulfilled = (payload) => {
	console.log('\nits been fullfilled! the payl');
	console.log(payload)
	console.log('\n\n')
	return {
		type: GET_INTRODUCTION_FULFILLED,
		payload: payload,
		isPending: false
	}
}

export const GET_INTRODUCTION_REJECTED = 'GET_INTRODUCTION_REJECTED';
const introductionRejected = (error) => {
	console.log('tehres an error:');
	console.log(err);
	return {
		type: GET_INTRODUCTION_REJECTED,
		error: error,
		isPending: false
	}
}

export const MESSAGE_SEND = 'MESSAGE_SEND';
const sendMessage = (message, userid) => {
	return {
		type: SEND_MESSAGE,
		message: message,
		userid: userid,
		isPending: true
	}
}

export const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED';
export const messageReceived = (message, json) => {
	return {
		type: MESSAGE_RECEIVED,
		result: json,
		isPending: false
	}
}
