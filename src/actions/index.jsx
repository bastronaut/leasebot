import sampledata from '../utils/sampledata';
import API from '../utils/Api';
import URLSearchParams from 'url-search-params';

const remaininganswermessage = 'Heeft deze vraag u geholpen?';

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
		setTimeout( () => {
			dispatch(sendMessagePending());
			scrollDown();
		}, 600);
		dispatch(sendMessageSend(message));
		
		var params = new URLSearchParams();
		params.append('questiontext', message);
		params.append('userid', userid);
		API.post('/question/', params).then(response => {
			dispatch(messageReceived(response));
			scrollDown();

			// this part is not so nice. Should probably not put this much logic
			// in action? Reducer may be better. Also risk for a race condition.
			// If a user types a 2nd message faster
			// than the 300ms timeout chain, it may get funky.
			// Can be solved by restructuring the Store to hold the ' remaininganswers'
			// not as an array on the store object, but as an array on each message object.
			// for MVP scope these kinds of limitations are.. probably OK?
			if (response.answer1) {
				setTimeout( () => {
					dispatch(remainingAnswersPending());
					scrollDown();
					setTimeout( () => {
						dispatch(sendRemainingAnswersInstruction(0));
						scrollDown();
					}, 1200);
				}, 600);
			}
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


export const REMAININGANSWERS_PENDING = 'REMAININGANSWERS_PENDING';
export const remainingAnswersPending = () => {
	return {
		type: REMAININGANSWERS_PENDING,
		isPending: true,
	}
}

export const REMAININGANSWERS_SENDINSTRUCTION = 'REMAININGANSWERS_SENDINSTRUCTION';
export const sendRemainingAnswersInstruction = () => {
	return {
		type: REMAININGANSWERS_SENDINSTRUCTION,
		message: remaininganswermessage
	}
}

export const evaluateAnswer = (evaluation, remainingAnswerCount) => {
	return dispatch => {
		setTimeout( () => {
			dispatch(evaluateAnswerEvaluate(evaluation));
			scrollDown();
		}, 600);
			
		if(evaluation == "NEE" && remainingAnswerCount > 0)
		{
			setTimeout( () => {
				dispatch(sendRemainingAnswersInstruction());
				scrollDown();
			}, 1200);
		}			
	}

}

export const EVALUATE_ANSWER = 'EVALUATE_ANSWER';
export const evaluateAnswerEvaluate = (evaluation) => {
	return {
		type: EVALUATE_ANSWER,
		evaluation: evaluation
	}
}

const scrollDown = () => {
	window.scrollTo(0,document.body.scrollHeight);
}
