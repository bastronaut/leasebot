



// const message = (state, action) => {
//   switch (action.type) {
//     case 'ADD_MESSAGE':
//       return [...state.messages,
//         {
//           nr: state.messages.length + 1,
//           text: action.text,
//           timestamp: action.timestamp,
//           isSending: false
//         }
//       )
//     default:
//       return state;
//   }
// }
//
const messages = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return ...
    default:
      return state;
  }
}




// https://github.com/reactjs/redux/blob/master/examples/todos-with-undo/src/reducers/todos.js
