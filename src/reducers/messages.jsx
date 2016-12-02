import {MESSAGE_SEND, MESSAGE_SEND_PENDING, MESSAGE_RECEIVED,
	MESSAGE_REJECTED, REMAININGANSWERS_PENDING,
	REMAININGANSWERS_SENDINSTRUCTION} from '../actions';

export const messages_reducer = (state = {
	messagelist: []
}, action) => {
	switch (action.type) {

		case MESSAGE_SEND:
			return {
				...state,
				error: false,
				messagelist: [
					...state.messagelist, {
						text: action.message,
						sender: 'person',
						timestamp: Date.now()
					}
				]
			};

		case MESSAGE_SEND_PENDING:
			return {
				...state,
				inProgress: true
			};

		case MESSAGE_RECEIVED:
			let remaininganswers = [];

			// hardcode check for answers from backend
			if (action.result['answer0']) {
				if (action.result['answer1']) {
					// if more answers are present, there will always be 3 additonal answers
					remaininganswers.push(action.result.answer1);
					remaininganswers.push(action.result.answer2);
					remaininganswers.push(action.result.answer3);
				};
				return {
					...state,
					messagelist: [
						...state.messagelist, {
							text: action.result.answer0,
							sender: 'bot',
							timestamp: Date.now()
						}
					],
					inProgress: false,
					error: false,
					remaininganswers: remaininganswers
				};
			} else {
				return state;
			}

		case MESSAGE_REJECTED:
			return {
				...state,
				inProgress: false,
				error: action.error
			};

		case REMAININGANSWERS_PENDING:
			if (state.remaininganswers.length > 1) {
				return {
					...state,
					inProgress: true
				};
				return state;
			}

		case REMAININGANSWERS_SENDINSTRUCTION:
		return {
			...state,
			messagelist: [
				...state.messagelist, {
					text: action.message,
					sender: 'bot',
					timestamp: Date.now()
				}
			],
			inProgress: false
		};
		return state;

		default:
			return state
	}
}
