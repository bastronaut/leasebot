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


export const SEND_MESSAGE = 'SEND_MESSAGE';

export function sendMessage(message) {
  return {
    type: SEND_MESSAGE,
    message
  }
}
