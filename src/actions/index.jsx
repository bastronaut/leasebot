import sampledata from '../utils/sampledata';
import API from '../utils/Api';
import URLSearchParams from 'url-search-params';


export const GET_INTRODUCTION = 'GET_INTRODUCTION';
export const getIntroduction = () => {
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
	console.log('\nits been fullfilled! the payload:');
	console.log(payload)
	return {
		type: GET_INTRODUCTION_FULFILLED,
		payload: payload,
		isPending: false
	}
}

export const GET_INTRODUCTION_REJECTED = 'GET_INTRODUCTION_REJECTED';
const introductionRejected = (error) => {
	console.log('theres an error:');
	console.log(err);
	return {
		type: GET_INTRODUCTION_REJECTED,
		error: error,
		isPending: false
	}
}


export const sendMessage = (message, userid) => {
	return dispatch => {
		dispatch(sendMessageSend(message));
		setTimeout( () => {
			dispatch(sendMessagePending())
		}, 1200);

		var params = new URLSearchParams();
		params.append('questiontext', message);
		params.append('userid', userid);
		API.post('/question/', params).then(response => {
			dispatch(messageReceived(response));
			scrollDown();
		}).catch(err => {
			dispatch(messageRejected(response));
		})
	}

}

// oops. Do some refactoring, send message and send message pending
// must be reorganized
export const MESSAGE_SEND = 'MESSAGE_SEND';
export const sendMessageSend = (message) => {
	return {
		type: MESSAGE_SEND,
		message: message
	}
}

export const MESSAGE_SEND_PENDING = 'MESSAGE_SEND_PENDING';
export const sendMessagePending = () => {
	return {
		type: MESSAGE_SEND_PENDING,
		isPending: true,
	}
}
export const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED';
export const messageReceived = (payload) => {
	console.log('the payload:');
	console.log(payload);
	return {
		type: MESSAGE_RECEIVED,
		result: payload,
		isPending: false
	}
}

export const MESSAGE_REJECTED = 'MESSAGE_REJECTED';
export const messageRejected = (error) => {
	return {
		type: MESSAGE_REJECTED,
		error: error,
		isPending: false
	}
}

const scrollDown = () => {
	window.scrollTo(0,document.body.scrollHeight);
}
