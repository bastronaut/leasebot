import { MESSAGE_SEND, MESSAGE_SEND_PENDING, MESSAGE_RECEIVED, MESSAGE_REJECTED} from '../actions';

export const messages_reducer = (state = { messagelist: []}, action) => {
	switch (action.type) {
		case MESSAGE_SEND:
			return {
				...state,
				error: false,
				messagelist: [...state.messagelist, {
					text: action.message,
					sender: 'person',
					timestamp: Date.now()
				}]
			};
		case MESSAGE_SEND_PENDING:
			return {
				...state,
				inProgress: true,
			};

		case MESSAGE_RECEIVED:
			return {
				...state,
				messagelist: [...state.messagelist, {
					text: action.result.answer0,
					sender: 'bot',
					timestamp: Date.now()
					}],
				inProgress: false,
				error: false
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
