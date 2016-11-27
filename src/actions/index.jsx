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
	console.log('theres an error:');
	console.log(err);
	return {
		type: GET_INTRODUCTION_REJECTED,
		error: error,
		isPending: false
	}
}

export const MESSAGE_SEND = 'MESSAGE_SEND';
export const sendMessage = (message, userid) => {
	return dispatch => {
		dispatch(sendMessagePending());
		let question = { questiontext: message, userid: userid};
		API.post('/question/', question).then(response => {
			dispatch(messageReceived(response));
		}).catch(err => {
			dispatch(messageRejected(response));
		})
	}

}

// return {
// 	type: MESSAGE_SEND,
// 	message: message,
// 	userid: userid,
// 	isPending: true
// }
//

export const MESSAGE_SEND_PENDING = 'MESSAGE_SEND_PENDING';
export const sendMessagePending = () => {
	return {
		type: MESSAGE_SEND_PENDING,
		isPending: true
	}
}
export const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED';
export const messageReceived = (payload) => {
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
