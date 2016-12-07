import {MESSAGE_SEND, MESSAGE_SEND_PENDING, MESSAGE_RECEIVED,
	MESSAGE_REJECTED, REMAININGANSWERS_PENDING,
	REMAININGANSWERS_SENDINSTRUCTION, EVALUATE_ANSWER} from '../actions';

const parseMessageText = (answerText) => {
	var urlRegex = /(https?:\/\/[^\s]+)/g;
    var newText = answerText.replace(urlRegex, function(url) {
        return "";
    });
	
	var urls = urlRegex.exec(answerText);
	var options = urls == null ? null : urls.map(function(url){ return { text: url, link: url, type: "url" }; });
	
	return {
		text: newText,
		hyperlinks: options
	};
}

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
				
				var answer = parseMessageText(action.result.answer0);
				
				return {
					...state,
					messagelist: [
						...state.messagelist, {
							text: answer.text,
							options: answer.hyperlinks,
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
			
		case EVALUATE_ANSWER:
			if(action.evaluation == "JA")
			{
				return {
					...state,
					messagelist: [
						...state.messagelist, {
							text: "Goed te horen, heeft u een andere vraag?",
							sender: 'bot',
							timestamp: Date.now()
						}
					],
					inProgress: false,
					error: false
				};
			}
			else{
				if(state.remaininganswers.length > 0)
				{
					var answer = parseMessageText(state.remaininganswers[0]);
					state.remaininganswers.shift();
					
					return {
						...state,
						messagelist: [
							...state.messagelist, {
								text: answer.text,
								options: answer.hyperlinks,
								sender: 'bot',
								timestamp: Date.now()
							}
						],
						inProgress: false,
						error: false,
						remaininganswers: state.remaininganswers
					};
				}
				else{
					return {
						...state,
						messagelist: [
							...state.messagelist, {
								text: "Helaas ben ik door mijn antwoorden heen, wellicht heeft u een andere vraag?",
								sender: 'bot',
								timestamp: Date.now()
							}
						],
						inProgress: false,
						error: false
					};
				}
			}			

		case REMAININGANSWERS_SENDINSTRUCTION:
		var remainingAnswerCount = typeof(state.remaininganswers) !== "undefined" ?
			state.remaininganswers.length : 
			0;
		return {
			...state,
			messagelist: [
				...state.messagelist, {
					text: action.message,
					sender: 'bot',
					timestamp: Date.now(),
					options: [
				    { text: 'Ja', link: 'JA', type: 'button', remainingAnswerCount: remainingAnswerCount },
				    { text: 'Nee', link: 'NEE', type: 'button', remainingAnswerCount: remainingAnswerCount }
					],
					
				}
			],
			inProgress: false
		};
		return state;

		default:
			return state
	}
}
